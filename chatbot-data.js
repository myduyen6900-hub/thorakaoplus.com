/* =========================================================================
   THORAKAO CHATBOT DATA
   Organized the same way as the script you gave me: groups of questions,
   each with a few keywords (used to match what the visitor types) and an
   answer. To add a new question later: add one object to the right
   group's `questions` array — no code changes needed anywhere else.
   ========================================================================= */
window.THORAKAO_CHATBOT = {

  greeting: "Xin chào bạn, mình là trợ lý của Thorakao Plus. Mình có thể giúp bạn tìm sản phẩm, hướng dẫn sử dụng, kiểm tra đơn hàng hoặc tư vấn loại phù hợp. Bạn muốn hỏi về chủ đề nào?",

  fallback: "Mình chưa hiểu rõ câu hỏi này. Bạn có thể chọn một chủ đề bên dưới, hoặc thử diễn đạt lại giúp mình nhé.",

  groups: [
    {
      id: "tu-van",
      label: "Tư vấn theo loại da",
      questions: [
        {
          keywords: ["da dầu", "dầu nhờn", "nhờn"],
          question: "Tôi da dầu nên dùng gì?",
          answer: "Với da dầu, bạn nên ưu tiên sữa rửa mặt dịu nhẹ, sản phẩm kiềm dầu vừa phải và kem dưỡng kết cấu mỏng. Nếu muốn, mình có thể gợi ý cụ thể theo tình trạng da của bạn."
        },
        {
          keywords: ["da khô"],
          question: "Tôi da khô nên dùng gì?",
          answer: "Da khô nên chọn sản phẩm làm sạch nhẹ, có khả năng cấp ẩm và giữ ẩm tốt. Bạn nên ưu tiên kem dưỡng hoặc sữa rửa mặt không gây căng da."
        },
        {
          keywords: ["thâm mụn", "vết thâm", "trị thâm"],
          question: "Tôi bị thâm mụn thì dùng gì?",
          answer: "Bạn có thể tham khảo các sản phẩm hỗ trợ làm mờ thâm và phục hồi da sau mụn. Nên dùng đều đặn và kết hợp chống nắng để hiệu quả tốt hơn."
        },
        {
          keywords: ["bị mụn", "nổi mụn", "mụn có dùng", "da mụn"],
          question: "Tôi bị mụn có dùng được không?",
          answer: "Có thể, nhưng nên chọn sản phẩm phù hợp cho da mụn, ưu tiên công thức dịu nhẹ và không gây bí da. Nếu bạn muốn, mình sẽ gợi ý sản phẩm chăm sóc da mụn phù hợp hơn."
        }
      ]
    },
    {
      id: "thanh-phan",
      label: "Hỏi về thành phần",
      questions: [
        {
          keywords: ["chiết xuất tự nhiên", "thiên nhiên", "tự nhiên"],
          question: "Sản phẩm này có chiết xuất tự nhiên không?",
          answer: "Nhiều sản phẩm của Thorakao Plus sử dụng nguyên liệu thiên nhiên như nghệ, bưởi, bồ kết, gừng, nha đam và các thành phần thảo mộc khác."
        },
        {
          keywords: ["thành phần chính", "thành phần là gì", "thành phần gồm"],
          question: "Thành phần chính của sản phẩm là gì?",
          answer: "Mỗi sản phẩm có bảng thành phần riêng. Bạn cho mình tên sản phẩm cụ thể, mình sẽ đọc và tóm tắt thành phần chính cho bạn."
        },
        {
          keywords: ["có cồn", "chứa cồn"],
          question: "Có cồn không?",
          answer: "Tùy từng sản phẩm. Bạn cho mình tên sản phẩm, mình sẽ kiểm tra giúp bạn theo thông tin công bố."
        },
        {
          keywords: ["hương liệu", "có mùi", "mùi hương"],
          question: "Có hương liệu không?",
          answer: "Một số sản phẩm có hương liệu tự nhiên hoặc mùi thảo mộc đặc trưng. Nếu bạn nhạy cảm với mùi, mình sẽ gợi ý sản phẩm phù hợp hơn."
        },
        {
          keywords: ["da nhạy cảm", "nhạy cảm"],
          question: "Sản phẩm có dùng được cho da nhạy cảm không?",
          answer: "Có thể, nhưng cần chọn đúng loại. Da nhạy cảm nên ưu tiên công thức dịu nhẹ, ít hoạt chất mạnh và nên test thử trước khi dùng toàn mặt."
        }
      ]
    },
    {
      id: "cach-dung",
      label: "Cách sử dụng",
      questions: [
        {
          keywords: ["dùng như thế nào", "cách dùng", "sử dụng như thế nào", "hướng dẫn sử dụng"],
          question: "Dùng sản phẩm này như thế nào?",
          answer: "Bạn cho mình tên sản phẩm, mình sẽ hướng dẫn từng bước sử dụng cụ thể."
        },
        {
          keywords: ["bao nhiêu lần", "mấy lần", "tần suất"],
          question: "Dùng bao nhiêu lần một ngày?",
          answer: "Tùy sản phẩm. Có sản phẩm dùng 1–2 lần/ngày, có sản phẩm chỉ dùng vài lần mỗi tuần. Mình sẽ nói rõ theo từng loại."
        },
        {
          keywords: ["ban đêm", "buổi tối", "qua đêm"],
          question: "Có dùng ban đêm được không?",
          answer: "Một số sản phẩm dùng ban đêm rất phù hợp, nhất là kem dưỡng hoặc sản phẩm phục hồi da. Bạn hãy gửi tên sản phẩm để mình hướng dẫn chính xác."
        },
        {
          keywords: ["rửa lại", "rửa mặt lại", "có cần rửa"],
          question: "Có cần rửa lại sau khi dùng không?",
          // NOTE: the source script cut off before giving an answer to this one —
          // replace this placeholder once you have the real answer.
          answer: "Câu trả lời cho câu hỏi này đang được cập nhật. Bạn có thể liên hệ trực tiếp để được tư vấn nhé."
        }
      ]
    }
  ]
};
