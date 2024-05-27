export interface Task {
    id: string;
    description: string;
    assignedTo: string; // User ID of the child
    completed: boolean;
    approved: boolean;
}