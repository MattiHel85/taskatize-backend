export interface User {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    role: 'parent' | 'child';
    parentId?: string; // For child profiles, link to parent
    childId?: string[];
}