import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export type SubmissionId = bigint;
export type SubmitResult = {
    __kind__: "ok";
    ok: SubmissionId;
} | {
    __kind__: "err";
    err: string;
};
export type Timestamp = bigint;
export interface ContactSubmission {
    id: SubmissionId;
    name: string;
    submittedAt: Timestamp;
    email: string;
    serviceInterest: ServiceInterest;
    message: string;
    phone: string;
}
export interface SubmitContactForm {
    name: string;
    email: string;
    serviceInterest: string;
    message: string;
    phone: string;
}
export enum ServiceInterest {
    Both = "Both",
    BusinessSolutions = "BusinessSolutions",
    Photography = "Photography"
}
export interface backendInterface {
    listContactSubmissions(): Promise<Array<ContactSubmission>>;
    submitContactForm(form: SubmitContactForm): Promise<SubmitResult>;
}
