import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
	en: {
		translation: {
			settings: 'Settings',
			language: 'Language',
			logout: 'Log out',
			english: 'English',
			arabic: 'Arabic',
			home: 'Home',
			portfolio: 'Portfolio',
			search: 'Search',
			profile: 'Profile',
		},
	},
	ar: {
		translation: {
			settings: 'الإعدادات',
			language: 'اللغة',
			logout: 'تسجيل الخروج',
			english: 'الإنجليزية',
			arabic: 'العربية',
			home: 'بيت',
			portfolio: 'مَلَفّ',
			search: 'يبحث',
			profile: 'حساب تعريفي',
		},
	},
}

i18n.use(initReactI18next).init({
	resources,
	lng: 'en',
	fallbackLng: 'en',
	interpolation: {
		escapeValue: false,
	},
})

export default i18n
