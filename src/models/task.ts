export interface Task {
    id: string;
    name: string;
    description: string;
    assignedTo: string; // User ID of the child
    priority: 'high' | 'medium' | 'low';
    isCompleted: boolean;
    isApproved: boolean;
}