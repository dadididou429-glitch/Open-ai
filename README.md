# AI Agent

وكيل ذكاء اصطناعي مستقل يعمل على Web ويمكن تحويله لاحقاً إلى Android.

## البنية
- frontend: واجهة المحادثة وPWA.
- backend: خادم Node.js يحمي مفتاح API.

## تشغيل Backend
```bash
cd backend
npm install
```

أنشئ ملف `.env`:
```env
OPENAI_API_KEY=YOUR_API_KEY
OPENAI_MODEL=YOUR_SUPPORTED_MODEL
```

ثم:
```bash
npm start
```

## تشغيل Frontend
عدّل `frontend/app.js` وضع رابط الـ Backend الحقيقي في `API_URL`.

## ملاحظة
لا تضع مفتاح API في frontend أو داخل GitHub.

## التطوير القادم
- Web Search
- Tools / Function Calling
- Memory
- File processing
- Task planning
- Agent execution
- Android APK
