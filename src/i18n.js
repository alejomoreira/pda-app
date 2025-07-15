import { createI18n } from 'vue-i18n'
import AppConfig from './app.config'

/**
 * Load locale messages
 *
 * The loaded `JSON` locale messages is pre-compiled by `@intlify/vue-i18n-loader`, which is integrated into `vue-cli-plugin-i18n`.
 * See: https://github.com/intlify/vue-i18n-loader#rocket-i18n-resource-pre-compilation
 */
function loadLocaleMessages() {
  const locales = require.context('./locales', true, /[A-Za-z0-9-_,\s]+\.json$/i)
  //console.log(locales)
  let messages = {}
  locales.keys().forEach(key => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i)
    if (matched && matched.length > 1) {
        const locale = matched[1]
        messages[locale] = locales(key).default
    }
  })
  //console.log(messages)
  return messages
}

export default createI18n({
  allowComposition: true, // you need to specify that!
  locale: AppConfig.defaultLocale || 'es',
  fallbackLocale: AppConfig.fallbackLocale || 'es',
  messages: loadLocaleMessages()
})


/*

en: {
        "home": {
            "welcome": "Home",
            "restauracion": "Restoration",
            "sobre-pda": "What is the paseo de la americas?",
            "contacto": "Contact us",
            "esculturas": "Sculptures",
            "mediacion": "Mediation"
        }
    }
{
    en: {
      hello: 'hello!'
    },
    ja: {
      hello: 'こんにちは！'
    }
  }
*/

