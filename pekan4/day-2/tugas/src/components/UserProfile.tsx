import React, { useReducer, useState } from "react";

interface UserProfile {
    id: number
    personalInfo: {
        firstName: string
        lastName: string
        email: string
        avatar?: string
    }
    preferences: {
        theme: 'light' | 'dark' | 'auto'
        notification: boolean
        language: string
    }
    stats: {
        loginCount: number
        lastLogin: Date
        accountCreated: Date
    }
}

type UserAction =
| { type: 'UPDATE_PROFILE', payload: Partial<UserProfile['personalInfo']> }
| { type: 'UPDATE_PREFERENCES', payload: Partial<UserProfile['preferences']> }
| { type: 'INCREMENT_LOGIN_COUNT' }
| { type: 'RESET' }

const initialUser: UserProfile = {
    id: 1,
    personalInfo: {
        firstName: 'Fulan',
        lastName: 'Al-Fulani',
        email: 'fulan.alfulani@example.com'
    },
    preferences: {
        theme: 'light',
        notification: true,
        language: 'id'
    },
    stats: {
        loginCount: 0,
        lastLogin: new Date(),    
        accountCreated: new Date()
    }
}

function userReducer(state: UserProfile, action: UserAction): UserProfile {
    switch (action.type) {
        case 'UPDATE_PROFILE':
            return {
                ...state,
                personalInfo: { ...state.personalInfo, ...action.payload }
            }
        case 'UPDATE_PREFERENCES':
            return {
                ...state,
                personalInfo: { ...state.personalInfo, ...action.payload }
            }
        case 'INCREMENT_LOGIN_COUNT':
            return {
                ...state,
                stats: {
                    ...state.stats,
                    loginCount: state.stats.loginCount + 1,
                    lastLogin: new Date()
                }
            }
        case 'RESET':
            return initialUser
        default:
            return state
    }   
}

const UserProfile: React.FC = () => {
  const [user, dispatch] = useReducer(userReducer, initialUser);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const handleProfileUpdate = (field: keyof UserProfile['personalInfo'], value: string): void => {
    dispatch({
      type: 'UPDATE_PROFILE',
      payload: { [field]: value }
    });
  };

  return (
    <div className="p-15">
        <div className="flex justify-center items-center">
            <div className="shadow-[0px_0px_20px_8px_#d9d9d9] rounded-xl text-[#222] bg-gray-100 p-10 text-left w-200">
                <h2 className="pb-5 font-bold text-[x-large] text-center">User Profile</h2>
                <div className="pb-4 border-b-1 border-b-[#999]">
                    <h3 className="font-semibold py-3 text-[large]">Personal Information</h3>
                    <p className="mb-0.5"><span className="font-[500]">Name:</span> {user.personalInfo.firstName} {user.personalInfo.lastName}</p>
                    <p className="mb-0.5"><span className="font-[500]">Email:</span>  {user.personalInfo.email}</p>
                    {isEditing ? (
                    <div className="flex flex-col gap-3">
                        <input
                            type="text"
                            value={user.personalInfo.firstName}
                            onChange={(e) => handleProfileUpdate('firstName', e.target.value)}
                            placeholder="First Name"
                            className="border border-solid border-[#999] rounded p-1 focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                        <input
                            type="text"
                            value={user.personalInfo.lastName}
                            onChange={(e) => handleProfileUpdate('lastName', e.target.value)}
                            placeholder="Last Name"
                            className="border border-solid border-[#999] rounded p-1 focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                        <input
                            type="email"
                            value={user.personalInfo.email}
                            onChange={(e) => handleProfileUpdate('email', e.target.value)}
                            placeholder="Email"
                            className="border border-solid border-[#999] rounded p-1 focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                        <button onClick={() => setIsEditing(false)} className="bg-blue-500 rounded-lg p-1 focus:ring-2 focus:ring-blue-200 w-25 text-[white] hover:cursor-pointer">
                            Save
                        </button>
                    </div>
                    ) : (
                    <button onClick={() => setIsEditing(true)}  className="mt-1.5 bg-blue-500 rounded-lg p-1 focus:ring-2 focus:ring-blue-200 w-25 text-[white] hover:cursor-pointer">Edit Profile</button>
                    )}
                </div>

                <div className="pb-4 border-b-1 border-b-[#999]">
                    <h3 className="font-semibold py-3 text-[large]">Preferences</h3>
                    <p>Theme: {user.preferences.theme}</p>
                    <p>Notifications: {user.preferences.notification ? 'Enabled' : 'Disabled'}</p>
                    <p>Language: {user.preferences.language}</p>
                </div>

                <div>
                    <h3 className="font-semibold py-3 text-[large]">Statistics</h3>
                    <p>Login Count: {user.stats.loginCount}</p>
                    <p>Last Login: {user.stats.lastLogin.toLocaleDateString()}</p>
                    <p>Member Since: {user.stats.accountCreated.toLocaleDateString()}</p>
                    <div className="flex gap-3 mt-4">
                        <button
                            onClick={() => dispatch({ type: "INCREMENT_LOGIN_COUNT" })}
                            className="bg-green-500 text-white px-3 py-1.5 rounded-lg hover:bg-green-600 transition hover:cursor-pointer"
                        >
                            Simulate Login
                        </button>
                        <button
                            onClick={() => dispatch({ type: "RESET" })}
                            className="bg-red-500 text-white px-3 py-1.5 rounded-lg hover:bg-red-600 transition hover:cursor-pointer"
                        >
                            Reset Profile
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default UserProfile;