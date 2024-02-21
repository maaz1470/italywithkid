
const body = document.body;
const head = document.head;

window.addEventListener('load', function () {
    console.log('load hoiche')


    head.insert = function (data) {
        head.appendChild(data)
    }

    function facadesLoad() {
        // Google Tag
        const google_tag = document.createElement('script');
        google_tag.src = 'https://www.googletagmanager.com/gtag/js?id=G-BNQFG674Q0';
        head.insert(google_tag)

        // Cookie
        const cookie = document.createElement('script');
        cookie.src = 'assets/js/cookieconsent.min.js';
        head.insert(cookie)
    }

    function delayFacades() {
        setTimeout(() => {
            window.CookieConsent.init({
                language: {
                    current: 'en'
                },
                categories: {
                    necessary: {
                        needed: true,
                        wanted: true,
                        checked: true,
                        language: {
                            locale: {
                                en: {
                                    name: 'Strictly Necessary Cookies',
                                    description: 'These cookies are essential to provide you with services available through our website and to enable you to use certain features of our website. Without these cookies, we cannot provide you certain services on our website.',
                                },
                                hu: {
                                    name: 'Szükséges sütik',
                                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu commodo est, nec gravida odio. Suspendisse scelerisque a ex nec semper.',
                                }
                            }
                        }
                    },
                    various: {
                        needed: false,
                        wanted: false,
                        checked: false,
                        language: {
                            locale: {
                                en: {
                                    name: 'Various Cookies',
                                    description: 'These cookies are used to collect information to analyze the traffic to our website and how visitors are using our website. For example, these cookies may track things such as how long you spend on the website or the pages you visit which helps us to understand how we can improve our website for you. The information collected through these tracking and performance cookies do not identify any individual visitor..',
                                },
                                hu: {
                                    name: 'Egyéb sütik',
                                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu commodo est, nec gravida odio. Suspendisse scelerisque a ex nec semper.',
                                }
                            }
                        }
                    }
                },
                services: {
                    facebook: {
                        category: 'various',
                        type: 'dynamic-script', // dynamic-script, script-tag, wrapped, localcookie
                        search: 'facebook',
                        language: {
                            locale: {
                                en: {
                                    name: 'Facebook'
                                },
                                hu: {
                                    name: 'Facebook'
                                }
                            }
                        }
                    },
                    azalead: {
                        category: 'various',
                        type: 'script-tag',
                        search: 'azalead',
                        language: {
                            locale: {
                                en: {
                                    name: 'Google Analytics'
                                },
                                hu: {
                                    name: 'Azalead'
                                }
                            }
                        }
                    },
                    wrapped: {
                        category: 'various',
                        type: 'wrapped',
                        search: 'wrapped',
                        language: {
                            locale: {
                                en: {
                                    name: 'Pinterest'
                                },
                                hu: {
                                    name: 'Csomagolt süti'
                                }
                            }
                        }
                    },
                    localcookie: {
                        category: 'various',
                        type: 'localcookie',
                        search: 'localcookie',
                        language: {
                            locale: {
                                en: {
                                    name: 'Instagram'
                                },
                                hu: {
                                    name: 'Helyi süti'
                                }
                            }
                        }
                    }
                }
            });
        }, 1000)

        setTimeout(() => {
            window.dataLayer = window.dataLayer || [];
            function gtag() { dataLayer.push(arguments); }
            gtag('js', new Date());

            gtag('config', 'G-BNQFG674Q0');
        }, 500)
    }

    window.addEventListener('scroll', function () {
        if (window.scrollY > 1000) {
            if (!window.rh) {
                window.rh = true;
                facadesLoad();
                delayFacades();
            }
        }
    })


    setTimeout(() => {

        // Google Font Load Here
        const google_font = document.createElement('link')
        google_font.href = 'https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,700;1,400&family=Noto+Sans+JP:wght@400;500;700;900&display=swap'
        google_font.rel = 'stylesheet';
        head.appendChild(google_font)
    }, 8000)
})