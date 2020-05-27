const initialState = {
    alerts: [
        {
            id: 1,
            sectionIconName: "faCreditCard",
            sectionTitle: "SPENDING ALERTS",
            items: [
                {
                    icons: [
                        {label: "Email", name:"faEnvelope", isOn: false},
                        {label: "Text", name:"faComment", isOn: false},
                        {label: "App", name:"faBell", isOn: false}
                    ],
                    iconError: "Please select a delivery method.",
                    header: {
                        title: "Transaction is over %s",
                        isOn: false
                    },
                    body: {
                        leftSection: { 
                            subtitle: "Send alert when:",
                            title: "A transaction occurs that is over:", 
                            input: {
                                inputType: "number",
                                inputIcon: "faDollarSign",
                                inputPlaceholder: "Amount",
                                inputValue: "",
                                inputError: ""
                            }
                        },
                        rightSection: {
                            subtitle: "Select where to send alert:",
                        }
                    }
                },
                {
                    icons: [
                        {label: "Email", name:"faEnvelope", isOn: false},
                        {label: "Text", name:"faComment", isOn: false},
                        {label: "App", name:"faBell", isOn: false}
                    ],
                    iconError: "",
                    header: {
                        title: "Credit or refund is posted",
                        isOn: false
                    },
                    body: {                     
                        leftSection: { 
                            subtitle: "Send alert when:",
                            title: "A merchant credit or refund is posted to this account"
                        },
                        rightSection: {
                            subtitle: "Select where to send alert:",
                        }
                    }
                },
                {
                    icons: [
                        {label: "Email", name:"faEnvelope", isOn: false},
                        {label: "Text", name:"faComment", isOn: false},
                        {label: "App", name:"faBell", isOn: false}
                    ],
                    iconError: "",
                    header: {
                        title: "International transaction occurs",
                        isOn: false
                    },
                    body: {                      
                        leftSection: { 
                            subtitle: "Send alert when:",
                            title: "An International transaction occurs on this account."
                        },
                        rightSection: {
                            subtitle: "Select where to send alert:",
                        }
                    }
                },
                {
                    icons: [
                        {label: "Email", name:"faEnvelope", isOn: false},
                        {label: "Text", name:"faComment", isOn: false},
                        {label: "App", name:"faBell", isOn: false}
                    ],
                    iconError: "",
                    header: {
                        title: "Online, phone, or mail transaction occurs",
                        isOn: false
                    },
                    body: {                  
                        leftSection: { 
                            subtitle: "Send alert when:",
                            title: "An online, phone, or mail transaction occurs."
                        },
                        rightSection: {
                            subtitle: "Select where to send alert:",
                        }
                    }
                },

            ]
        },
        {
            id: 2,
            sectionIconName: "faUniversity",
            sectionTitle: "BALANCE ALERTS",
            items: [
                {
                    icons: [
                        {label: "Email", name:"faEnvelope", isOn: false},
                        {label: "Text", name:"faComment", isOn: false},
                        {label: "App", name:"faBell", isOn: false}
                    ],
                    iconError: "",
                    header: {
                        title: "Balance exceeds %s ",
                        isOn: false
                    },
                    body: {                        
                        leftSection: { 
                            subtitle: "Send alert when:",
                            title: "The balance on this account exceeds", 
                            input: {
                                inputType: "number",
                                inputIcon: "faDollarSign",
                                inputPlaceholder: "Amount",
                                inputValue: "",
                                inputError: ""
                            }
                        },
                        rightSection: {
                            subtitle: "Select where to send alert:",
                        }
                    }
                },
                {
                    icons: [
                        {label: "Email", name:"faEnvelope", isOn: false},
                        {label: "Text", name:"faComment", isOn: false},
                        {label: "App", name:"faBell", isOn: false}
                    ],
                    iconError: "",
                    header: {
                        title: "Available to spend is within %s of credit limit ",
                        isOn: false
                    },
                    body: {                      
                        leftSection: { 
                            subtitle: "Send alert when:",
                            title: "Available to spend is within this amount of the credit limit",
                            input: {
                                inputType: "number",
                                inputIcon: "faDollarSign",
                                inputPlaceholder: "Amount",
                                inputValue: "",
                                inputError: ""
                            }
                        },
                        rightSection: {
                            subtitle: "Select where to send alert:",
                        }
                    }
                },
                
            ]
        },
        {
            id: 3,
            sectionIconName: "faMoneyBillAlt",
            sectionTitle: "PAYMENT ALERTS",
            items: [
                {
                    icons: [
                        {label: "Email", name:"faEnvelope", isOn: false},
                        {label: "Text", name:"faComment", isOn: false},
                        {label: "App", name:"faBell", isOn: false}
                    ],
                    iconError: "",
                    header: {
                        title: "Payment is scheduled",
                        isOn: false
                    },
                    body: {                     
                        leftSection: { 
                            subtitle: "Send alert when:",
                            title: "A payment is scheduled to be made on this account.", 
                            tag: "We will always send you an email alert"
                        },
                        rightSection: {
                            subtitle: "Select where to send alert:",
                        }
                    }
                },
                {
                    icons: [
                        {label: "Email", name:"faEnvelope", isOn: false},
                        {label: "Text", name:"faComment", isOn: false},
                        {label: "App", name:"faBell", isOn: false}
                    ],
                    iconError: "",
                    header: {
                        title: "Payment is due in %d days ",
                        isOn: false
                    },
                    body: {                       
                        leftSection: { 
                            subtitle: "Send alert when:",
                            title: "A payment is due in",
                            input: {
                                inputType: "number",
                                inputIcon: "",
                                inputPlaceholder: "5 days",
                                inputValue: "",
                                inputError: ""
                            }
                        },
                        rightSection: {
                            subtitle: "Select where to send alert:",
                        }
                    }
                },
                {
                    icons: [
                        {label: "Email", name:"faEnvelope", isOn: false},
                        {label: "Text", name:"faComment", isOn: false},
                        {label: "App", name:"faBell", isOn: false}
                    ],
                    iconError: "",
                    header: {
                        title: "Promotional purchase will expire in %d days ",
                        isOn: false
                    },
                    body: {               
                        leftSection: { 
                            subtitle: "Send alert when:",
                            title: "The expiration date of my promotional purchase is in: ",
                            input: {
                                inputType: "number",
                                inputIcon: "",
                                inputPlaceholder: "14 days",
                                inputValue: "",
                                inputError: ""
                            }
                        },
                        rightSection: {
                            subtitle: "Select where to send alert:",
                        }
                    }
                },
                {
                    icons: [
                        {label: "Email", name:"faEnvelope", isOn: false},
                        {label: "Text", name:"faComment", isOn: false},
                        {label: "App", name:"faBell", isOn: false}
                    ],
                    iconError: "",
                    header: {
                        title: "Account is past due",
                        isOn: false
                    },
                    body: {        
                        leftSection: { 
                            subtitle: "Send alert when:",
                            title: "A payment is past due",
                        },
                        rightSection: {
                            subtitle: "Select where to send alert:",
                        }
                    }
                },
            ]
        }
    ]
}

export default initialState;