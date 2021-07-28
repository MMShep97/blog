import Saffron from '@/components/Saffron'

export default function () {
    return {
        icons: {
            values: {
                saffron: {
                    component: Saffron
                }
            }
        },
        theme: {
            options: {
            customProperties: true
            },
            dark: true,
            themes: {
            dark: {
                accent: {
                test: 'E63946'
                },
                background: '1D3557',
                cardBackground: '192D4A',
                primaryAccent: 'E63946',
                lightAccent: 'A8DADC',
                mediumLightAccent: '457B9D',
                darkAccent: '192D4A',
                primaryText: 'F1FAEE',
                secondaryText: 'A8B2D1',
            }
            },
        },
        customVariables: ['~/assets/variables.scss'],
        treeShake: true
    }
}