import { Action } from '@reduxjs/toolkit';


/**
 * FailedAction is an interface which describes
 * properties returned by the payload of
 * an action that failed
 */
export interface FailedAction extends Action {
    error: Error;
}