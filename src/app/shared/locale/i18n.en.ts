import { InjectionToken } from '@angular/core';

export const i18nLabels = {
    username:'User Name',
    password:'Password',
    clientName:'Client Name',
    mobileNo:'Mobile No',
    address:'Adreess',
    location:'Location',
    otherService:'Other Service',
    enquiryDate:'Enquiry Date',
    amc:'AMC',
    vip:'VIP',
    cancel:'Cancel',
    save:'Save',
    technicianName:'Technician Name',
    paymentPending:'Payment Pending',
    customerName:'Customer Name',
    dashboard:'Dashboard',
    report:'Report',
    usermanagement:'User Management',
    referenceNumber:'Reference Number',
    date:'Date',
    customerApproval:'Customer Approval'
}

export const LABEL_TOKEN = new InjectionToken<string>('i18nLabels');