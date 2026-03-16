import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {

  console.log("===== reservation API 호출 =====");
  console.log("method:", req.method);

  if (req.method !== "POST") {
    console.log("POST 아님 → 차단");
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {

    const { name, phone, visitDate, visitTime, message } = req.body || {};

    console.log("받은 데이터:", {
      name,
      phone,
      visitDate,
      visitTime,
      message,
    });

    if (!name || !phone || !visitDate || !visitTime) {
      const phoneRegex = /^010-\d{4}-\d{4}$/;

      if (!phoneRegex.test(phone)) {
  return res.status(400).json({
    message: "전화번호 형식이 올바르지 않습니다.",
  });
}

      console.log("필수값 누락");

      return res.status(400).json({
        message: "필수 입력값이 누락되었습니다.",
      });
    }

    const html = `
      <h2>모델하우스 방문예약 접수</h2>

      <p><strong>이름</strong> : ${escapeHtml(name)}</p>
      <p><strong>연락처</strong> : ${escapeHtml(phone)}</p>
      <p><strong>방문일</strong> : ${escapeHtml(visitDate)}</p>
      <p><strong>방문시간</strong> : ${escapeHtml(visitTime)}</p>
      <p><strong>문의사항</strong> : ${escapeHtml(message || "-")}</p>
    `;

    console.log("메일 발송 시작");

    const result = await resend.emails.send({
      from: "모델하우스 예약 <onboarding@resend.dev>",
      to: process.env.ADMIN_EMAIL || "yokhwa1250@naver.com",
      subject: `[방문예약] ${name} / ${visitDate} ${visitTime}`,
      html,
    });

    console.log("Resend 응답:", result);

    if (result.error) {

      console.error("메일 발송 실패:", result.error);

      return res.status(500).json({
        message: "메일 전송에 실패했습니다.",
      });
    }

    console.log("메일 발송 성공");

    return res.status(200).json({
      message: "예약 접수 완료",
    });

  } catch (error) {

    console.error("API 내부 오류:", error);

    return res.status(500).json({
      message: "서버 오류 발생",
    });
  }
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}