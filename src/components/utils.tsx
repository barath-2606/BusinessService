export const scheduleConsultation = (formUrl: string, openMethod: string = '_blank') => {
    window.open(formUrl, openMethod)
}

export const navigateToGmail = (email: string) => {
    window.location.href = `mailto:${email}?subject=Consultation Request`;
}