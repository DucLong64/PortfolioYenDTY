export interface AssignmentStep {
  title: string;
  detail: string;
}

export interface AssignmentSection {
  title: string;
  detail?: string;
  subtitle?: string;
  expandLabel?: string;
  steps?: AssignmentStep[];
}

export interface Assignment {
  id: string;
  title: string;
  subject: string;
  tools: string[];
  summary: string;
  sections: AssignmentSection[];
  driveLink: string;
  pdfEmbedLink: string;
}

export const assignments: Assignment[] = [
  {
    id: "1",
    title: "Thao tác cơ bản với tệp tin và thư mục",
    subject: "Tin học đại cương",
    tools: ["Windows", "File Explorer"],
    summary:
      "Thực hành 12 bước thao tác cơ bản trên File Explorer: tạo thư mục ThucHanh_hotensinhvien, quản lý tệp tin, sao chép, di chuyển, xóa và khôi phục từ Thùng rác.",
    sections: [
      {
        title: "Các bước thực hiện",
        expandLabel: "Xem cách làm",
        steps: [
          {
            title: "Mở File Explorer",
            detail:
              "Nhấn tổ hợp phím Windows + E hoặc nhấp vào biểu tượng thư mục màu vàng trên thanh tác vụ.",
          },
          {
            title: "Truy cập ổ đĩa/thư mục",
            detail:
              "Ở cột bên trái, nhấp vào This PC, sau đó nhấp đúp vào một ổ đĩa không phải ổ hệ thống (ví dụ: ổ D: hoặc E:). Nếu chỉ có ổ C:, hãy vào thư mục Documents.",
          },
          {
            title: "Tạo thư mục mới",
            detail:
              "Nhấp chuột phải vào một khoảng trống → chọn New → Folder. Đặt tên thư mục là ThucHanh_hotensinhvien (ví dụ: ThucHanh_NguyenVanA). Nhấn Enter.",
          },
          {
            title: "Vào thư mục vừa tạo",
            detail: "Nhấp đúp vào thư mục ThucHanh_NguyenVanA.",
          },
          {
            title: "Tạo tệp tin văn bản",
            detail:
              "Nhấp chuột phải vào khoảng trống → New → Text Document. Đặt tên là GhiChu.txt, sau đó nhấn Enter.",
          },
          {
            title: "Đổi tên tệp tin",
            detail:
              "Nhấp chuột phải vào tệp GhiChu.txt → chọn Rename. Đổi tên thành GhiChuQuanTrong.txt và nhấn Enter.",
          },
          {
            title: "Tạo thư mục con",
            detail:
              "Trong thư mục ThucHanh_NguyenVanA, nhấp chuột phải → New → Folder. Đặt tên là TaiLieu.",
          },
          {
            title: "Sao chép tệp tin (Copy & Paste)",
            detail:
              "Nhấp chuột phải vào GhiChuQuanTrong.txt → Copy (hoặc Ctrl + C). Mở thư mục TaiLieu, nhấp chuột phải vào khoảng trống → Paste (Ctrl + V) để tạo bản sao.",
          },
          {
            title: "Di chuyển tệp tin (Cut & Paste)",
            detail:
              "Quay lại thư mục ThucHanh_NguyenVanA. Tạo một tệp mới tên là DiChuyen.txt. Nhấp chuột phải vào tệp DiChuyen.txt → chọn Cut (hoặc Ctrl + X). Nhấp đúp vào thư mục TaiLieu, nhấp chuột phải vào khoảng trống → chọn Paste (hoặc Ctrl + V). Tệp gốc biến mất khỏi vị trí cũ và chỉ còn ở vị trí mới.",
          },
          {
            title: "Xóa tệp tin",
            detail:
              "Trong thư mục TaiLieu, nhấp chuột phải vào GhiChuQuanTrong.txt → Delete. Tệp được chuyển vào Thùng rác (Recycle Bin).",
          },
          {
            title: "Xóa vĩnh viễn",
            detail:
              "Chọn tệp DiChuyen.txt, nhấn giữ Shift và nhấn Delete. Xác nhận cảnh báo để xóa vĩnh viễn mà không qua Thùng rác.",
          },
          {
            title: "Khôi phục từ Thùng rác",
            detail:
              "Mở Recycle Bin trên màn hình nền, tìm GhiChuQuanTrong.txt, nhấp chuột phải → Restore. Tệp quay trở lại vị trí ban đầu.",
          },
        ],
      },
    ],
    driveLink: "https://drive.google.com/file/d/1idUAIcC2QobdTd6VqHviO5okUvIInmJ3/view?usp=sharing",
    pdfEmbedLink: "https://drive.google.com/file/d/1idUAIcC2QobdTd6VqHviO5okUvIInmJ3/preview",
  },
  {
    id: "2",
    title: "Tìm kiếm và đánh giá thông tin học thuật",
    subject: "Nghiên cứu học thuật nha khoa số",
    tools: ["Google Scholar", "PubMed", "Google Patents", "ITI", "WHO", "Harvard Style"],
    summary:
      "Bài tập tập trung khảo sát sai số trong máng hướng dẫn phẫu thuật in 3D cho cấy ghép implant toàn hàm, đối chiếu nhiều nguồn dữ liệu (bài báo, sách, đồng thuận chuyên gia, luận văn, bằng sáng chế) và đánh giá độ tin cậy theo tư duy phản biện.",
    sections: [
      {
        title: "Các bước thực hiện",
        expandLabel: "Xem cách làm",
        steps: [
          {
            title: "Khoanh vùng vấn đề nghiên cứu có tính lâm sàng cao",
            detail:
              "Xác định trọng tâm là sai số lâm sàng và giới hạn vật liệu Resin trong máng hướng dẫn phẫu thuật in 3D cho implant toàn hàm. Thiết lập phạm vi theo ba trục: (1) không gian nghiên cứu quốc tế kết hợp bối cảnh Việt Nam, (2) nhóm sai số cần theo dõi gồm sai số góc, sai số entry và sai số apex, (3) khung thời gian 2016–2026 để đảm bảo tính cập nhật công nghệ.",
          },
          {
            title: "Thiết kế chiến lược truy vấn đa nguồn thay vì phụ thuộc một cơ sở dữ liệu",
            detail:
              "Xây dựng bộ từ khóa theo nhóm kỹ thuật (guided surgery, full-arch, resin deformation, accuracy), sau đó triển khai đồng thời trên Google Scholar, PubMed và Microsoft Academic. Song song, mở rộng sang nguồn chuyên ngành như ITI, WHO, tạp chí Q1, sách chuyên khảo và kho bằng sáng chế để không bỏ sót góc nhìn kỹ thuật mới.",
          },
          {
            title: "Sàng lọc tài liệu theo mức độ ứng dụng thực tế",
            detail:
              "Ưu tiên tài liệu có dữ liệu đo lường sai số liên quan trực tiếp đến quy trình implant toàn hàm và workflow số (CBCT + scan hàm + thiết kế máng). Loại các nguồn chỉ mô tả công nghệ chung mà không có thông số lâm sàng định lượng hoặc không nêu điều kiện in/điều kiện vật liệu.",
          },
          {
            title: "Đánh giá chéo giữa dữ liệu quốc tế và điều kiện triển khai tại Việt Nam",
            detail:
              "Đối chiếu kết quả từ bài báo/đồng thuận quốc tế với luận văn và ca thực hành trong nước để nhận diện khoảng cách triển khai thực tế (thiết bị labo, quy mô mẫu, quy trình kiểm soát sai số). Cách làm này giúp tránh kết luận thiên lệch theo điều kiện lý tưởng của các trung tâm lớn.",
          },
          {
            title: "Lập ma trận thẩm định độ tin cậy theo tư duy phản biện",
            detail:
              "Tạo bảng tổng hợp gồm ưu điểm, hạn chế và mức xếp hạng sao cho từng nguồn (meta-analysis, sách nền tảng, consensus, tài liệu WHO, luận văn). Không chỉ ghi điểm mạnh mà bắt buộc chỉ ra điểm yếu khả dĩ (ví dụ khác biệt bối cảnh quốc gia, dữ liệu cũ theo phiên bản phần mềm, quy mô mẫu nhỏ).",
          },
          {
            title: "Hoàn thiện danh mục tham khảo chuẩn Harvard và tổng kết học thuật",
            detail:
              "Chuẩn hóa toàn bộ trích dẫn theo Harvard Style (tác giả, năm, tiêu đề, nguồn, DOI/URL, ngày truy cập) và chốt kết luận theo hướng y học dựa trên bằng chứng: độ chính xác dữ liệu số quyết định hiệu quả lâm sàng, còn kỷ luật trích dẫn thể hiện trách nhiệm học thuật trong môi trường số.",
          },
        ],
      },
    ],
    driveLink: "https://drive.google.com/file/d/1vQl1gIAsgl2V7xfYrjZxbkNrrEVRgNgo/view?usp=sharing",
    pdfEmbedLink: "https://drive.google.com/file/d/1vQl1gIAsgl2V7xfYrjZxbkNrrEVRgNgo/preview",
  },
  {
    id: "3",
    title: "Viết Prompt hiệu quả cho các tác vụ học tập",
    subject: "Ứng dụng AI trong học tập",
    tools: ["ChatGPT", "Prompt Engineering", "Feynman Technique", "Chain-of-Thought"],
    summary:
      "Thực hành tối ưu hóa prompt theo ba phiên bản (cơ bản, cải tiến, nâng cao) trên 3 tác vụ: tóm tắt tài liệu, giải thích khái niệm và tạo bộ câu hỏi ôn tập; từ đó rút ra nguyên tắc viết prompt phục vụ tự học hiệu quả.",
    sections: [
      {
        title: "Các bước thực hiện",
        expandLabel: "Xem cách làm",
        steps: [
          {
            title: "Chọn bộ tác vụ đại diện cho các mức độ tư duy khác nhau",
            detail:
              "Thiết lập ba tác vụ thử nghiệm gồm: tóm tắt tài liệu học thuật (file “Khí hậu là gì”), giải thích khái niệm “Lạm phát”, và tạo câu hỏi tự luận về Lịch sử Việt Nam thế kỷ 19. Cách chọn này giúp kiểm tra AI ở các mức hiểu, vận dụng và thiết kế nội dung đánh giá.",
          },
          {
            title: "Thiết kế 3 phiên bản prompt cho từng tác vụ",
            detail:
              "Mỗi tác vụ đều xây dựng theo cùng một khung: prompt cơ bản (yêu cầu ngắn), prompt cải tiến (ràng buộc độ dài/định dạng/đối tượng), prompt nâng cao (gắn persona + kỹ thuật suy luận + định dạng đầu ra). Khung thống nhất này giúp so sánh công bằng giữa các phiên bản.",
          },
          {
            title: "Chạy thử nghiệm và ghi nhận đầu ra theo bộ tiêu chí chung",
            detail:
              "Với từng tác vụ, chạy đủ 3 phiên bản prompt và đối chiếu theo các tiêu chí: độ chính xác nội dung, mức độ có cấu trúc, tính dễ đọc, khả năng dùng ngay cho học tập. Kết quả cho thấy prompt cơ bản thường cho câu trả lời bề mặt, trong khi prompt nâng cao tạo ra đầu ra sâu hơn và có tổ chức.",
          },
          {
            title: "Phân tích yếu tố kỹ thuật làm prompt nâng cao vượt trội",
            detail:
              "Xác định ba yếu tố tác động mạnh nhất: (1) Persona prompting giúp AI chọn phong cách chuyên môn phù hợp; (2) Chain-of-Thought hỗ trợ diễn giải tuần tự, giảm lỗi nhảy bước; (3) Constraints về định dạng (bảng, rubric, độ dài) nâng chất lượng sử dụng thực tế của đầu ra.",
          },
          {
            title: "Tổng hợp thành bảng so sánh và rút ra mẫu prompt hiệu quả",
            detail:
              "Lập bảng đối chiếu cơ bản/cải tiến/nâng cao theo từng tiêu chí (độ chính xác, cấu trúc, tính ứng dụng). Từ bảng này, chuẩn hóa một mẫu prompt học tập gồm: bối cảnh nguồn, đối tượng nhận, yêu cầu định dạng, mức độ chi tiết và mục tiêu đầu ra.",
          },
          {
            title: "Đúc kết bộ nguyên tắc viết prompt phục vụ tự học",
            detail:
              "Kết luận bộ nguyên tắc gồm: cung cấp bối cảnh rõ, xác định đối tượng người học, yêu cầu AI giải thích từng bước, ràng buộc định dạng cụ thể và liên tục tinh chỉnh theo phản hồi. Nhờ đó, AI chuyển từ công cụ trả lời nhanh thành trợ lý học tập có thể kiểm soát chất lượng.",
          },
        ],
      },
    ],
    driveLink: "https://drive.google.com/file/d/1dkf3p2Y1z_WK2dYkVto3IFlhrJnlUQlP/view?usp=sharing",
    pdfEmbedLink: "https://drive.google.com/file/d/1dkf3p2Y1z_WK2dYkVto3IFlhrJnlUQlP/preview",
  },
  {
    id: "4",
    title: "Sử dụng công cụ hợp tác trực tuyến cho dự án nhóm",
    subject: "Làm việc nhóm số",
    tools: ["Trello", "Google Docs", "Google Drive", "Zalo", "Google Meet"],
    summary:
      "Triển khai dự án nhóm với chủ đề tuyên truyền sức khỏe răng miệng cho học sinh tiểu học, sử dụng bộ công cụ Trello, Google Docs, Google Drive, Zalo và Google Meet để phân công, cộng tác và giám sát tiến độ.",
    sections: [
      {
        title: "Các bước thực hiện",
        expandLabel: "Xem cách làm",
        steps: [
          {
            title: "Chốt chủ đề dự án và phân vai công cụ theo mục tiêu",
            detail:
              "Xác định đề tài là “Tuyên truyền sức khỏe răng miệng cho học sinh tiểu học” và thống nhất cách dùng công cụ theo từng nhu cầu: Trello để quản lý đầu việc, Google Docs để soạn thảo cộng tác, Google Drive để lưu trữ/chia sẻ tệp, Zalo và Google Meet để trao đổi và họp nhóm.",
          },
          {
            title: "Thiết lập không gian làm việc chung và kết nối thành viên",
            detail:
              "Người điều phối tạo nhóm Zalo để bảo đảm liên lạc nhanh giữa các thành viên. Đồng thời tạo thư mục dự án trên Google Drive và phân quyền phù hợp để mọi người cùng truy cập tài liệu, gồm biên bản họp, dàn ý thuyết trình, phân chia nội dung và bản tổng hợp cuối.",
          },
          {
            title: "Tổ chức họp trực tuyến và ghi nhận nội dung theo thời gian thực",
            detail:
              "Trước buổi họp, gửi tài liệu nền qua Google Drive để các thành viên chuẩn bị trước. Trong cuộc họp Google Meet, thảo luận phạm vi nội dung, phân chia phần trình bày và chốt tiến độ. Toàn bộ biên bản và ý chính được ghi trực tiếp trên Google Docs để tránh thất lạc thông tin.",
          },
          {
            title: "Xây dựng kế hoạch hành động trên Trello theo các bước cụ thể",
            detail:
              "Sau họp, chuyển kế hoạch sang Trello với ba thao tác chính: (1) tạo bảng theo chủ đề dự án, (2) thêm các thẻ công việc vào từng danh sách, (3) gắn người phụ trách và mốc thời gian cho từng nhiệm vụ. Nhóm theo dõi tiến độ bằng cách cập nhật trạng thái thẻ thường xuyên.",
          },
          {
            title: "Đánh giá hiệu quả từng công cụ trong quá trình phối hợp nhóm",
            detail:
              "Trello cho hiệu quả tốt trong phân công và theo dõi nhờ mô hình Kanban trực quan. Google Docs hỗ trợ chỉnh sửa đồng thời, lưu tự động và làm việc nhóm theo thời gian thực. Google Drive giúp lưu trữ/chia sẻ ổn định; Zalo và Google Meet duy trì liên lạc nhanh, thuận tiện cho nhóm nhỏ.",
          },
          {
            title: "Nhận diện thách thức và đề xuất cách khắc phục thực tế",
            detail:
              "Khó khăn chính là một số thành viên chưa quen thao tác trên Trello nên chậm ở giai đoạn đầu. Giải pháp là dành thời gian làm quen giao diện, thực hành tạo bảng/thẻ và thống nhất quy ước cập nhật trạng thái trước khi triển khai đầy đủ.",
          },
        ],
      },
    ],
    driveLink: "https://drive.google.com/file/d/184cl99VB-MKt65H-c6LcGzQQkvU62sk2/view?usp=sharing",
    pdfEmbedLink: "https://drive.google.com/file/d/184cl99VB-MKt65H-c6LcGzQQkvU62sk2/preview",
  },
  {
    id: "5",
    title: "Sử dụng AI tạo sinh để hỗ trợ sáng tạo nội dung",
    subject: "Nha chu & thiết kế nội dung số",
    tools: ["Google Gemini", "ChatGPT", "Bing Image Creator (DALL·E 3)", "Canva AI"],
    summary:
      "Xây dựng cẩm nang số dạng infographic về phân loại bệnh Nha chu và viêm quanh Implant theo chuẩn AAP/EFP 2017, kết hợp nhiều công cụ AI để tạo nội dung, hình ảnh và bố cục, đồng thời kiểm định chặt chẽ tính chính xác y khoa trước khi hoàn thiện sản phẩm.",
    sections: [
      {
        title: "Các bước thực hiện",
        expandLabel: "Xem cách làm",
        steps: [
          {
            title: "Xác định mục tiêu học tập và bài toán trực quan hóa kiến thức Nha chu",
            detail:
              "Chọn đề tài cẩm nang số về hệ thống phân loại bệnh Nha chu và viêm quanh Implant theo AAP/EFP 2017, vì đây là mảng kiến thức nhiều ma trận và dễ gây quá tải nhận thức. Mục tiêu là chuyển nội dung lý thuyết thành infographic lâm sàng bỏ túi để sinh viên RHM tra cứu nhanh khi học và đi viện.",
          },
          {
            title: "Khai thác và chuẩn hóa khung kiến thức bằng AI tạo văn bản",
            detail:
              "Sử dụng Gemini để trích xuất cấu trúc Staging/Grading theo AAP 2017 bằng từ khóa ngắn gọn; sau đó dùng ChatGPT để thiết kế luồng infographic 5 phần theo tư duy UI/UX. Kết quả AI được xem như bản nháp: giữ các ý logic, đồng thời loại các cách diễn đạt dịch thô hoặc thiếu chuẩn lâm sàng.",
          },
          {
            title: "Hiệu đính chuyên môn và Việt hóa thuật ngữ trước khi thiết kế",
            detail:
              "Thực hiện hiệu chỉnh thủ công các thuật ngữ sang ngôn ngữ y khoa chuẩn (CAL, RBL, vùng chẽ, tiêu xương theo chiều ngang…), đồng thời cô đọng số liệu thành cụm ký hiệu trực quan để dễ đọc trên infographic. Bước này bảo đảm phần đóng góp học thuật của người làm vượt mức chỉnh sửa bề mặt.",
          },
          {
            title: "Tạo phôi hình minh họa bằng DALL·E 3 và sửa lỗi giải phẫu",
            detail:
              "Dùng Bing Image Creator để tạo ảnh mô phỏng viêm nha chu theo phong cách minh họa y khoa nền trắng. Sau khi nhận ảnh, rà soát lỗi giải phẫu do AI sinh sai (đường viền lợi, hình thể vùng tổn thương…) và chỉnh sửa thủ công để đạt mức chấp nhận về mặt học liệu lâm sàng.",
          },
          {
            title: "Dựng sản phẩm cuối trên Canva AI theo logic học tập lâm sàng",
            detail:
              "Sử dụng Canva AI để lấy khung bố cục và icon cơ bản, sau đó tái cấu trúc bằng tay: dựng ma trận Staging/Grading, quy hoạch thứ bậc thông tin, và áp dụng thang màu cảnh báo y khoa từ xanh đến đỏ/tím theo mức độ nặng. Kết quả là infographic dọc có khả năng tra cứu nhanh trong thực hành.",
          },
          {
            title: "Đánh giá công cụ, rủi ro đạo đức và lưu minh chứng quy trình",
            detail:
              "Lập bảng so sánh điểm mạnh/yếu của Gemini, ChatGPT, DALL·E 3 và Canva AI; đồng thời phân tích rủi ro cốt lõi khi dùng AI trong y khoa (sai lệch thông tin, bản quyền, lệ thuộc nhận thức). Hoàn thiện báo cáo kèm bộ minh chứng quá trình (prompt, bản nháp AI, bước chỉnh sửa, sản phẩm cuối) để bảo đảm tính minh bạch học thuật.",
          },
        ],
      },
    ],
    driveLink: "https://drive.google.com/file/d/1ds1OYYTEusJoc045bA8Jz6ZveqP25qs-/view?usp=sharing",
    pdfEmbedLink: "https://drive.google.com/file/d/1ds1OYYTEusJoc045bA8Jz6ZveqP25qs-/preview",
  },
  {
    id: "6",
    title: "Sử dụng AI có trách nhiệm trong học tập và nghiên cứu",
    subject: "Đạo đức AI trong học thuật y khoa",
    tools: ["Gemini", "ChatGPT", "PubMed", "VNU Guideline", "Infographic"],
    summary:
      "Nghiên cứu chính sách AI tại VNU và ứng dụng AI có trách nhiệm để tổng hợp chuyên đề phẫu thuật nhổ răng khôn hàm dưới mọc lệch ngầm, nhấn mạnh quy trình kiểm chứng lâm sàng, minh bạch học thuật và nguyên tắc đạo đức khi sử dụng AI.",
    sections: [
      {
        title: "Các bước thực hiện",
        expandLabel: "Xem cách làm",
        steps: [
          {
            title: "Phân tích khung chính sách AI và liêm chính học thuật tại VNU",
            detail:
              "Tổng hợp các nguyên tắc cốt lõi: minh bạch việc dùng AI, trách nhiệm giải trình thuộc về người học, và tôn trọng sở hữu trí tuệ. Ghi nhận quan điểm quản lý “Human-in-the-loop” của VNU: AI được chấp nhận như công cụ hỗ trợ học thuật, không thay thế tư duy độc lập hay quyền tác giả của con người.",
          },
          {
            title: "Xác lập nhiệm vụ nghiên cứu và mục tiêu chuyên đề lâm sàng",
            detail:
              "Chọn đề tài tổng hợp tài liệu về phẫu thuật nhổ răng khôn hàm dưới mọc lệch ngầm, tập trung vào phân loại Winter và Pell & Gregory, chỉ định can thiệp, quy trình phẫu thuật chuẩn và biến chứng thường gặp như tổn thương thần kinh ổ răng dưới (IAN) và viêm ổ răng khô.",
          },
          {
            title: "Thiết kế prompt chiến lược để dựng khung kiến thức và đào sâu bằng chứng",
            detail:
              "Sử dụng prompt 1 để yêu cầu AI xây dựng đề cương hệ thống (phân loại, chỉ định, kỹ thuật, biến chứng), sau đó dùng prompt 2 để truy vấn sâu các nghiên cứu 5 năm gần đây về nguy cơ tổn thương IAN và so sánh kỹ thuật nhổ truyền thống với coronectomy. Toàn bộ prompt được lưu vào nhật ký sử dụng AI.",
          },
          {
            title: "Kiểm chứng chéo đầu ra AI bằng y văn và bối cảnh Việt Nam",
            detail:
              "Thực hiện fact-checking 100% với giáo trình phẫu thuật hàm mặt và bài báo PubMed; bổ sung dữ liệu thực hành trong nước để giảm thiên lệch từ dữ liệu Âu-Mỹ. Các khuyến nghị từ AI (đặc biệt liên quan coronectomy) được chỉnh sửa thêm phần chống chỉ định và cảnh báo biến chứng để phù hợp thực hành an toàn.",
          },
          {
            title: "Đánh giá ranh giới đạo đức giữa hỗ trợ hợp lý và gian lận học thuật",
            detail:
              "Phân biệt rõ sử dụng AI để tăng tốc nghiên cứu (hợp lý) với sao chép nguyên văn đầu ra AI hoặc “xào xáo” né đạo văn (gian lận). Phân tích rủi ro về bản quyền dữ liệu huấn luyện, nguy cơ lệ thuộc nhận thức và trách nhiệm nghề nghiệp khi thông tin sai được dùng trong môi trường y khoa.",
          },
          {
            title: "Hoàn thiện AI Disclosure, bộ nguyên tắc cá nhân và infographic minh họa",
            detail:
              "Soạn tuyên bố minh bạch về công cụ, thời điểm và mục đích dùng AI; khẳng định nội dung học thuật cuối cùng do người học tự biên soạn sau kiểm chứng. Kết thúc bằng bộ 6 nguyên tắc sử dụng AI có trách nhiệm (chủ quyền tư duy, xác thực tuyệt đối, minh bạch triệt để, chống đạo văn số, bảo mật dữ liệu, tối ưu năng lực) và tạo infographic tóm tắt để phổ biến thực hành đúng.",
          },
        ],
      },
    ],
    driveLink: "https://drive.google.com/file/d/1zPoXktyAyg39TkQg9l1k-VX2iKtEMHVb/view?usp=sharing",
    pdfEmbedLink: "https://drive.google.com/file/d/1zPoXktyAyg39TkQg9l1k-VX2iKtEMHVb/preview",
  },
];
