# Employee Dashboard - Debugging Assignment

A Next.js employee management application with some bugs that need fixing.

## Your Mission

This employee dashboard application is **almost working**, but several features are broken. Your task is to find and fix all the bugs to make the application fully functional.

## Getting Started

### Installation

1. Install dependencies:
```
npm install
```

2. Create a `.env.local` file (if not present) with:
```
API_URL=your_api_url_here
```

3. Start the development server:
```
npm run dev
```

## Expected Features

The application should support:

- **View Employees** - Display a list of all employees
- **Add Employee** - Create new employee records
- **Edit Employee** - Update existing employee information
- **Delete Employee** - Remove employees from the system
- **Sort Employees** - Sort by name, hire date, or job title
- **View Details** - See individual employee details
- **Edit Details** - Modify employee details from the detail page

## Known Issues

The application currently has several bugs affecting functionality. Your job is to:

1. **Identify** all bugs
2. **Document** what's broken and why
3. **Fix** each bug
4. **Verify** the fix works correctly

## Testing Your Fixes

After fixing bugs, verify these features work:

### Employee List
- [ ] Employees load on page mount
- [ ] Sorting by name (A-Z and Z-A) works
- [ ] Sorting by hire date (newest/oldest) works
- [ ] Filtering by job title works
- [ ] List updates immediately after changes

### Add Employee
- [ ] Modal opens with empty form
- [ ] Can enter name, job title, and hire date
- [ ] New employee appears in list immediately
- [ ] Modal closes after successful add

### Edit Employee
- [ ] Modal opens with pre-filled data
- [ ] Can modify employee information
- [ ] Changes appear in list immediately
- [ ] Modal closes after successful edit

### Delete Employee
- [ ] Employee is removed from list immediately
- [ ] No page refresh required

### Employee Details
- [ ] Can view individual employee details
- [ ] Edit button switches to edit mode
- [ ] Edit mode shows input fields
- [ ] Can save changes from detail page
- [ ] Back button returns to employee list

## Submission

When complete, document:

1. **List of bugs found** - What was broken?
2. **Root causes** - Why did each bug occur?
3. **Fixes applied** - How did you fix each bug?
4. **Testing results** - How did you verify the fixes?



1. List of Bugs
Login Blocked: Users couldn't get past the login screen.

Form Errors: The account creation form had missing data types.

False Success: The system said "User added" even when it failed.

UI Crashes: The employee list crashed if a job title was missing.

2. Root Causes
State Settings: A "true/false" setting was stuck, blocking the login.

Missing Definitions: The code didn't know what kind of data the form should hold.

Bad Logic: The "Error" section of the code was accidentally set to report success.

Empty Data: The inputs didn't know how to handle empty or "null" text.

3. Fixes Applied
Login: Forced the login state to true at line 17.

Typing: Defined the form state as UserAccessRequest.

Logic: Fixed the addUserAction to properly report when a username is taken.

Safety: Added || "" (empty strings) to inputs so they don't crash when data is missing.

4. Testing Results
Login: Works now.

Forms: No more typing errors.

Errors: Shows the correct "Username taken" message.

Display: Employee data shows up smoothly without crashing.


In Employee List I uncommented line 27 and commented 28 to get employees

i added .env.local and added api and added in vercel