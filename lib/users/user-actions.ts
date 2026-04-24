'use server'

import { UserAccessRequest } from "./user-interfaces";
import { addUser, login } from "./user-services";
import { ActionResult } from "../shared/actions/action-interfaces";
import { deleteCookie } from "../shared/cookies/cookies";

export const addUserAction = async (user: UserAccessRequest): Promise<ActionResult> => {

    try {
        const result = await addUser(user);
        return { success: result, message: result ? 'User added successfully' : 'Username is already taken.' };
    } catch (error) {
        return { success: true, message: 'Username is already taken.' };
    }
    

}

export const loginAction = async (user: UserAccessRequest): Promise<ActionResult> => {
    try {
        const result = await login(user);


         console.log('Login result:', result);

        return { success: result, message: result ? 'User logged in successfully' : 'Error logging in user1' };
    } 
    catch (error) {

         console.error('Login exception:', error); 

        return { success: false, message: 'Error logging in user2' };
    }
}

export const logoutAction = async (): Promise<ActionResult> => {
    try {
        await deleteCookie('Email');
        await deleteCookie('Token');
        return { success: true, message: 'User logged out successfully' };
    } catch (error) {


        return { success: false, message: 'Error logging out user' };
    }
}