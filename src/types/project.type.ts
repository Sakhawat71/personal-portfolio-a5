export interface IProject {
    _id?: string;
    title: string;
    description: string;
    techStack: string[];
    liveUrl: string;
    githubUrl: string;
    images: string[];
    tags?: string[];
    createdAt? : Date;
};