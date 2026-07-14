/* =========================================================================
   THORAKAO PRODUCT DATA
   One entry per product. chi-tiet-san-pham.html reads the ?id= from the
   URL, looks up the matching entry here, and renders the page from it.
   To add a new product: add one object to this array — no new HTML file
   needed, and no other file has to change.
   ========================================================================= */
window.THORAKAO_PRODUCTS = [
  {
    id: "lotion-tinh-dau-buoi-150ml",
    category: "Chăm sóc tóc",
    categoryHref: "./cham-soc-toc.html",
    name: "Lotion dưỡng tóc tinh dầu Bưởi 150ml",
    price: 343000,
    image: "./assets/images/shop/lotion-tinh-dau-buoi-150ml.jpg",
    shortDesc: "Giảm rụng tóc, kích thích mọc tóc và hỗ trợ bảo vệ da đầu — phù hợp cho tóc yếu hoặc đang trong quá trình phục hồi.",
    ingredients: "Tinh dầu vỏ bưởi, tinh dầu vỏ cam, Silanediol salicylate.",
    benefits: "Giảm rụng tóc, kích thích mọc tóc, hỗ trợ bảo vệ da đầu, phù hợp cho tóc yếu hoặc đang phục hồi.",
    steps: [
      "Lắc đều chai trước khi dùng.",
      "Xịt trực tiếp lên da đầu và chân tóc, nhất là vùng tóc thưa, dễ rụng.",
      "Massage nhẹ 3–5 phút để tinh chất thẩm thấu tốt hơn.",
      "Dùng 2–3 lần/ngày, tốt nhất sau khi gội đầu."
    ],
    note: "Chỉ dùng khi tóc sạch, không bết dầu. Sản phẩm không thay thế thuốc chữa bệnh."
  },
  {
    id: "dau-goi-cao-bo-ket-250ml",
    category: "Chăm sóc tóc",
    categoryHref: "./cham-soc-toc.html",
    name: "Dầu gội Cao Bồ Kết Thorakao 250ml",
    price: 48000,
    image: "./assets/images/shop/dau-goi-cao-bo-ket-250ml.jpg",
    shortDesc: "Giảm gàu, chống nấm, ngăn ngừa gãy rụng tóc — cho tóc đen bóng và mềm mượt.",
    ingredients: "Tinh chất bồ kết thiên nhiên.",
    benefits: "Giảm gàu, chống nấm, ngăn ngừa gãy rụng tóc, kích thích mọc tóc, làm sạch da đầu, hỗ trợ tóc đen bóng và mềm mượt.",
    steps: [
      "Làm ướt toàn bộ tóc và da đầu.",
      "Pha dầu gội với nước theo tỷ lệ 1:1, tạo bọt nhẹ rồi thoa đều lên tóc.",
      "Massage nhẹ 2–3 phút.",
      "Xả sạch với nước, dùng khăn thấm bớt nước và hong khô tự nhiên."
    ],
    note: "Nên dùng đều đặn 2–3 lần/tuần."
  },
  {
    id: "dau-goi-xa-2in1-bo-ket-400ml",
    category: "Chăm sóc tóc",
    categoryHref: "./cham-soc-toc.html",
    name: "Dầu gội xả 2in1 Bồ Kết Thorakao 400ml",
    price: 104000,
    image: "./assets/images/shop/dau-goi-xa-2in1-bo-ket-400ml.jpg",
    shortDesc: "Làm sạch tóc và da đầu, nuôi dưỡng tóc mềm mại, dễ chải và lưu hương lâu.",
    ingredients: "Chiết xuất bồ kết.",
    benefits: "Làm sạch tóc và da đầu, giảm dầu thừa, nuôi dưỡng tóc mềm mại, tăng độ ẩm, giúp tóc dễ chải và lưu hương lâu.",
    steps: [
      "Làm ướt tóc.",
      "Cho lượng vừa đủ ra lòng bàn tay.",
      "Tạo bọt và thoa đều lên tóc và da đầu.",
      "Massage nhẹ rồi xả sạch.",
      "Dùng 2–3 lần/tuần hoặc theo nhu cầu."
    ],
    note: "Phù hợp cho tóc nhờn, tóc yếu và dễ gãy rụng."
  },
  {
    id: "dau-goi-xa-2in1-hoa-buoi-400ml",
    category: "Chăm sóc tóc",
    categoryHref: "./cham-soc-toc.html",
    name: "Dầu gội xả 2in1 Hoa Bưởi Thorakao 400ml",
    price: 104000,
    image: "./assets/images/shop/dau-goi-xa-2in1-hoa-buoi-400ml.jpg",
    shortDesc: "Nuôi dưỡng tóc chắc khỏe, giảm khô xơ, hỗ trợ phục hồi tóc chẻ ngọn.",
    ingredients: "Tinh dầu bưởi.",
    benefits: "Nuôi dưỡng tóc chắc khỏe, giảm khô xơ, hỗ trợ phục hồi tóc chẻ ngọn, kích thích mọc tóc, ngăn rụng tóc, làm sạch da đầu và giảm gàu.",
    steps: [
      "Làm ướt tóc.",
      "Lấy lượng vừa đủ, thoa đều lên tóc.",
      "Massage da đầu 2–3 phút.",
      "Xả sạch đến khi hết bọt."
    ],
    note: "Hợp tóc dễ gãy rụng và da đầu nhờn."
  },
  {
    id: "dau-goi-toi-400ml",
    category: "Chăm sóc tóc",
    categoryHref: "./cham-soc-toc.html",
    name: "Dầu gội Tỏi ngăn rụng giảm gàu 400ml",
    price: 120000,
    image: "./assets/images/shop/dau-goi-toi-400ml.jpg",
    shortDesc: "Giúp tóc bóng mượt, sạch gàu, kích thích chân tóc và ngăn rụng tóc.",
    ingredients: "Iodized Garlic Extract chiết xuất từ củ tỏi tươi.",
    benefits: "Giúp tóc bóng mượt, sạch gàu, mềm và dễ chải; kích thích chân tóc; ngăn rụng tóc; cân bằng pH da đầu.",
    steps: [
      "Làm ướt tóc.",
      "Lấy lượng vừa đủ ra lòng bàn tay.",
      "Tạo bọt và thoa đều lên tóc, da đầu.",
      "Massage nhẹ rồi xả sạch.",
      "Dùng 2–3 lần/tuần hoặc theo tình trạng tóc."
    ],
    note: "Phù hợp cho mọi loại tóc."
  },
  {
    id: "dau-goi-ha-thu-o-400ml",
    category: "Chăm sóc tóc",
    categoryHref: "./cham-soc-toc.html",
    name: "Dầu gội Hà Thủ Ô giảm bạc tóc 400ml",
    price: 144000,
    image: "./assets/images/shop/dau-goi-ha-thu-o-400ml.jpg",
    shortDesc: "Nuôi dưỡng chân tóc, giúp tóc chắc khỏe và đen mượt, hỗ trợ giảm bạc sớm.",
    ingredients: "Tinh dầu Hà Thủ Ô kết hợp dưỡng chất nuôi dưỡng tóc.",
    benefits: "Nuôi dưỡng chân tóc, giúp tóc chắc khỏe và đen mượt, giảm rụng tóc, ngăn gàu, hỗ trợ giảm bạc sớm.",
    steps: [
      "Làm ướt tóc.",
      "Lắc đều chai, lấy lượng vừa đủ.",
      "Thoa đều lên tóc và massage nhẹ da đầu.",
      "Xả sạch với nước."
    ],
    note: "Phù hợp người tóc yếu, xơ mỏng, có dấu hiệu bạc sớm."
  },
  {
    id: "dau-goi-cu-sa-man-trau-400ml",
    category: "Chăm sóc tóc",
    categoryHref: "./cham-soc-toc.html",
    name: "Dầu gội Củ sả Mần trầu Thorakao 400ml",
    price: 144000,
    image: "./assets/images/shop/dau-goi-cu-sa-man-trau-400ml.jpg",
    shortDesc: "Giảm gàu, giảm ngứa da đầu, làm sạch tóc với hương sả dễ chịu.",
    ingredients: "Củ sả và mần trầu.",
    benefits: "Giảm gàu, giảm ngứa da đầu, hỗ trợ giảm rụng tóc, làm sạch tóc và da đầu, cho cảm giác thơm mùi sả dễ chịu.",
    steps: [
      "Làm ướt tóc.",
      "Cho lượng vừa đủ ra tay và tạo bọt.",
      "Thoa đều lên tóc và da đầu.",
      "Massage nhẹ rồi xả sạch.",
      "Dùng 2–3 lần/tuần."
    ],
    note: "Tên official — dùng thay cho \"Cỏ Mần Trầu\"."
  },
  {
    id: "kem-nghe-giam-tham-seo-7g",
    category: "Dưỡng da",
    categoryHref: "./cham-soc-da.html",
    name: "Kem nghệ giảm thâm sẹo Thorakao 7g",
    price: 47000,
    image: "./assets/images/shop/kem-nghe-giam-tham-seo-7g.jpg",
    shortDesc: "Hỗ trợ làm mờ thâm, sẹo mới; giúp da đều màu và sáng mịn.",
    ingredients: "Chiết xuất nghệ thiên nhiên.",
    benefits: "Giảm khô da, làm da mềm mại; hỗ trợ làm mờ thâm, sẹo mới; giúp da đều màu và sáng mịn; phù hợp vùng da bị thâm do mụn hoặc vết côn trùng đốt.",
    steps: [
      "Rửa mặt sạch bằng sữa rửa mặt.",
      "Chấm kem lên vùng da bị thâm mụn hoặc sẹo.",
      "Sau 2 tiếng, rửa lại bằng nước sạch, tốt nhất là nước ấm.",
      "Dùng 1–2 lần/ngày, không để quá 2 tiếng trên da.",
      "Có thể dùng thêm toner/nước hoa hồng sau khi rửa."
    ],
    note: "Không để quá lâu trên da."
  },
  {
    id: "kem-nghe-collagen-10g",
    category: "Dưỡng da",
    categoryHref: "./cham-soc-da.html",
    name: "Kem Nghệ Collagen Thorakao 10g",
    price: 142000,
    image: "./assets/images/shop/kem-nghe-collagen-10g.jpg",
    shortDesc: "Giữ ẩm, hỗ trợ ngăn lão hóa, giúp da mềm mịn và căng bóng.",
    ingredients: "Nghệ thiên nhiên, collagen, vitamin E.",
    benefits: "Giữ ẩm, hỗ trợ ngăn lão hóa, giúp da mềm mịn, căng bóng; hỗ trợ phục hồi da và làm mờ vết thâm sẹo.",
    steps: [
      "Rửa mặt sạch.",
      "Thoa nhẹ kem lên da mặt.",
      "Massage nhẹ để kem thấm sâu.",
      "Dùng 1–2 lần mỗi ngày.",
      "Có thể bôi qua đêm hoặc lên vùng da thâm sẹo."
    ],
    note: "Phù hợp mô tả \"kem mụn thâm\"."
  },
  {
    id: "sua-rua-mat-hat-nghe-100g",
    category: "Dưỡng da",
    categoryHref: "./cham-soc-da.html",
    name: "Sữa rửa mặt Hạt Nghệ ngừa mụn 100g",
    price: 79000,
    image: "./assets/images/shop/sua-rua-mat-hat-nghe-100g.jpg",
    shortDesc: "Làm sạch da mặt, hỗ trợ ngừa mụn, giảm thâm nám.",
    ingredients: "Chiết xuất hạt nghệ, glycerin.",
    benefits: "Làm sạch da mặt, hỗ trợ ngừa mụn, giảm thâm nám, hỗ trợ làm lành sẹo, giúp da sáng mịn và không bị khô căng sau rửa mặt.",
    steps: [
      "Làm ướt da mặt.",
      "Cho lượng vừa đủ sữa rửa mặt vào lòng bàn tay.",
      "Hòa với ít nước và massage đều khắp mặt, chú trọng vùng có mụn cám.",
      "Rửa lại thật sạch với nước."
    ],
    note: "Phù hợp để đưa vào trang \"cleanser\"."
  },
  {
    id: "sua-rua-mat-tay-trang-nha-dam-140g",
    category: "Dưỡng da",
    categoryHref: "./cham-soc-da.html",
    name: "Sữa rửa mặt tẩy trang 2in1 Nha đam 140g",
    price: null,
    image: "./assets/images/shop/sua-rua-mat-tay-trang-nha-dam-140g.jpg",
    shortDesc: "Làm sạch sâu, loại bỏ bụi bẩn và cặn trang điểm, giữ ẩm cho da.",
    ingredients: "Nha đam.",
    benefits: "Làm sạch sâu, loại bỏ bụi bẩn và cặn trang điểm, đồng thời giữ ẩm cho da, giúp da sạch nhưng không khô.",
    steps: [
      "Dùng sản phẩm để làm sạch da.",
      "Thấm nước hoa hồng hoặc cân bằng da sau đó.",
      "Có thể dùng trong chu trình 4 bước làm sạch – cân bằng – tẩy tế bào chết – dưỡng sáng."
    ],
    note: "Giá cần chèn theo trang official trước khi xuất bản."
  },
  {
    id: "sua-rua-mat-sua-bo-120g",
    category: "Dưỡng da",
    categoryHref: "./cham-soc-da.html",
    name: "Sữa rửa mặt tinh chất sữa bò Thorakao 120g",
    price: 73000,
    image: "./assets/images/shop/sua-rua-mat-sua-bo-120g.jpg",
    shortDesc: "Làm sạch nhẹ nhàng, giữ ẩm, giúp da mềm mịn và sáng khỏe.",
    ingredients: "Tinh chất sữa bò.",
    benefits: "Làm sạch bụi bẩn, giữ ẩm, giúp da mềm mịn và sáng khỏe; phù hợp cho làn da muốn làm sạch nhẹ nhàng nhưng vẫn dưỡng ẩm.",
    steps: [
      "Làm ướt mặt.",
      "Lấy lượng vừa đủ vào lòng bàn tay, hòa với ít nước.",
      "Thoa đều và massage nhẹ nhàng khắp mặt.",
      "Rửa sạch với nước.",
      "Thực hiện các bước dưỡng da tiếp theo."
    ],
    note: "Nên kết hợp nước hoa hồng sau khi rửa."
  },
  {
    id: "kem-duong-oc-sen-ngay-30g",
    category: "Dưỡng da",
    categoryHref: "./cham-soc-da.html",
    name: "Kem dưỡng da Ốc Sên Ngày Thorakao 30g",
    price: 274000,
    image: "./assets/images/shop/kem-duong-oc-sen-ngay-30g.jpg",
    shortDesc: "Tái tạo da, làm mờ thâm nám, giảm nếp nhăn, cấp ẩm suốt ngày.",
    ingredients: "Dịch nhầy ốc sên.",
    benefits: "Tái tạo da, làm mờ thâm nám, giảm nếp nhăn, cung cấp độ ẩm suốt ngày, bảo vệ da khỏi tác động môi trường và ánh nắng.",
    steps: [
      "Lấy lượng kem vừa đủ.",
      "Thoa đều lên vùng da mặt và cổ.",
      "Massage nhẹ theo vòng tròn.",
      "Chờ 1–2 phút cho kem thấm.",
      "Dùng vào buổi sáng, sau bước rửa mặt và nước hoa hồng."
    ],
    note: "Có thể dùng trước kem chống nắng hoặc trang điểm."
  },
  {
    id: "kem-nam-oc-sen-30g",
    category: "Dưỡng da",
    categoryHref: "./cham-soc-da.html",
    name: "Kem nám Ốc sên Thorakao 30g",
    price: 313000,
    image: "./assets/images/shop/kem-nam-oc-sen-30g.jpg",
    shortDesc: "Giảm nám, tàn nhang, thâm sạm; cải thiện độ đàn hồi và ngăn ngừa lão hóa.",
    ingredients: "Dịch nhầy ốc sên kết hợp tinh chất thảo dược.",
    benefits: "Giảm nám, tàn nhang, thâm sạm; dưỡng da sáng mịn, đều màu; cải thiện độ đàn hồi; giảm nếp nhăn; ngăn ngừa lão hóa.",
    steps: [
      "Làm sạch da mặt bằng sữa rửa mặt phù hợp.",
      "Chấm kem lên vùng nám, tàn nhang hoặc đốm nâu.",
      "Thoa đều và massage nhẹ nhàng.",
      "Có thể thoa mỏng toàn mặt nếu muốn làm đều màu da."
    ],
    note: "Hợp với bài viết về dưỡng da chuyên sâu."
  },
  {
    id: "kem-duong-gac-3g",
    category: "Dưỡng da",
    categoryHref: "./cham-soc-da.html",
    name: "Kem dưỡng da Gấc Thorakao 3g",
    price: 57000,
    image: "./assets/images/shop/kem-duong-gac-3g.jpg",
    shortDesc: "Dưỡng da sáng mịn, hỗ trợ giảm sạm da, chống lão hóa.",
    ingredients: "Tinh dầu quả gấc, vitamin A, E, B3, lycopen.",
    benefits: "Dưỡng da sáng mịn, hỗ trợ giảm sạm da, chống lão hóa, làm mềm da.",
    steps: [],
    note: "Hướng dẫn sử dụng chưa có trong tài liệu gốc — cập nhật sau."
  }
];
