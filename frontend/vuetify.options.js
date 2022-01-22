import Saffron from '@/components/svg/Saffron'
import LinkedIn from '@/components/svg/LinkedIn'
import StackOverflow from '@/components/svg/StackOverflow'
import GitHub from '@/components/svg/GitHub'

export default function () {
    return {
        breakpoint: {
          mobileBreakpoint: 'sm',
          scrollBarWidth: 24,
          thresholds: {
            xs: 728,
            sm: 960,
            md: 1384, // see: `variables.scss` take into consideration the width of the scrollbar, so breakpoint is truly 1360
            lg: 1928,
          },
        },
        icons: {
            values: {
                saffron: {
                    component: Saffron
                },
                linkedin: {
                    component: LinkedIn
                },
                stackoverflow: {
                    component: StackOverflow
                },
                github: {
                    component: GitHub
                },
            }
        },
        theme: {
            options: {
            customProperties: true
            },
            dark: true,
            themes: {
                dark: {
                    primary: 'F1FAEE',
                    secondary: 'A8B2D1',
                    tertiary: 'A8DADC', // formally light accent
                    lightMediumAccent: '457B9D',
                    darkAccent: '192D4A',
                    background: '1D3557',
                    cardBackground: '192D4A',
                    primaryAccent: 'E63946',
                }
            },
        },
    }
}
