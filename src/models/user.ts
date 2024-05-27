export interface User {
    id: string;
    name: string;
    email: string;
    role: 'parent' | 'child';
    parentId?: string; // For child profiles, link to parent
}