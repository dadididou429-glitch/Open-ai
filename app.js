const API_URL = "https://YOUR-BACKEND-URL.onrender.com";

const form = document.getElementById("chatForm");
const input = document.getElementById("messageInput");
const messages = document.getElementById("messages");
const typing = document.getElementById("typing");
let conversation = [];

function addMessage(text, type) {
  const wrapper = document.createElement("div");
  wrapper.className = `message ${type}`;
  const bubble = document.createElement("div");
  bubble.className = "bubble";
  bubble.textContent = text;
  wrapper.appendChild(bubble);
  messages.appendChild(wrapper);
  messages.scrollTop = messages.scrollHeight;
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const text = input.value.trim();
  if (!text) return;

  addMessage(text, "user");
  input.value = "";
  conversation.push({ role: "user", content: text });
  typing.style.display = "block";

  try {
    const response = await fetch(`${API_URL}/api/agent`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages: conversation })
    });

    if (!response.ok) throw new Error("Server error");

    const data = await response.json();
    typing.style.display = "none";
    const answer = data.answer || "لم أتمكن من الحصول على إجابة.";
    addMessage(answer, "agent");
    conversation.push({ role: "assistant", content: answer });
  } catch (error) {
    typing.style.display = "none";
    addMessage("حدث خطأ في الاتصال بالخادم. تأكد من تشغيل الـ Backend.", "agent");
    console.error(error);
  }
});
