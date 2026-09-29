import React from "react";

/**
 * Student Profile
 *
 * Define a component named StudentProfile.
 *
 * Its state should be ONE object containing:
 * - name: string
 * - major: string
 * - year: number
 * - honors: boolean
 * 
 * Display all three pieces of information.
 * 
 * The component should have three buttons:
 * 
 *    "Change Name"
 *        -> changes the name to your name
 * 
 *    "Change Major"
 *        -> changes the major to your major
 * 
 *    "Change Year"
 *      -> changes the year to your year
 * 
 *   "Change Honors"
 *       -> change to whether or not you are in honors
 * 
 * The student should be stored as ONE object in state,
 * rather than having four separate pieces of state.
*/

export default function StudentProfile(): React.JSX.Element {
    return (
        <div>
            <h2>Student Profile</h2>
            {/* Define your component */}
        </div>
    );
}