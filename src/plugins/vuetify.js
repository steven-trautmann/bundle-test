import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

const theme = {
    primary: '#E91E63',
    secondary: '#9C27b0',
    accent: '#9C27b0',
    info: '#00CAE3',
    warning: '#FABB00',
    loginAnimation: '#8CBB86',
    backgroundColor: '#9E9E9E'
}

export default new Vuetify({
    theme: {
        dark: false,
        options: {
            customProperties: true
        },
        themes: {
            dark: theme,
            light: theme
        },
    }
})
