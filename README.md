# AI Agent

وكيل ذكاء اصطناعي مستقل يعمل على Web ويمكن تحويله لاحقاً إلى Android.

## البنية
- frontend: واجهة المستخدم وPWA.
- backend: خادم Node.js يحمي مفتاح API.

## تشغيل Backend
cd backend
npm install

أنشئ ملف `.env` وضع مفتاح API واسم نموذج متاح، ثم:
npm start

## Frontend
عدّل API_URL في `frontend/app.js` وضع رابط الـ Backend الحقيقي.

لا تضع مفتاح API داخل frontend أو GitHub.

## التطوير القادم
Web Search - Tools / Function Calling - Memory - Files - Task Planning - Android APK
