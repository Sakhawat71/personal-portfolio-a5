export interface IMessage {
    _id?: string;
    name: string;
    email: string;
    phone?: string;
    message: string;
    ip?: string;
    userAgent?: string;
    referrer?: string;
    location?: {
        country?: string;
        region?: string;
        city?: string;
        latitude?: number;
        longitude?: number;
    };
};