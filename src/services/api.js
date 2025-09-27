const API_URL = process.env.NEXT_PUBLIC_API_URL;

async function fetchAPI(endpoint) {
  const fullUrl = `${API_URL}/api/v1/${endpoint}`;
  console.log(`[API] Đang gọi đến: ${fullUrl}`); // Log ra để biết đang gọi URL nào

  try {
    const res = await fetch(fullUrl, {
      // Thêm option này để Next.js không cache request lỗi, giúp dễ debug hơn
      cache: 'no-store' 
    });

    // Nếu response không OK (ví dụ: lỗi 404, 500 từ Django), log lỗi và trả về null
    if (!res.ok) { // Sửa lại thành !res.ok
      console.error(`[API Error] Lỗi HTTP! Status: ${res.status} tại ${fullUrl}`);
      // Thử đọc text lỗi từ body nếu có
      const errorText = await res.text();
      console.error(`[API Error Body] ${errorText}`);
      return null;
    }

    // Nếu mọi thứ OK, trả về JSON
    return res.json();
    
  } catch (error) {
    // Nếu fetch bị lỗi hoàn toàn (không kết nối được server, DNS, etc.)
    console.error(`[API Fetch Failed] Không thể kết nối đến server API tại ${fullUrl}.`);
    console.error(`[API Fetch Failed] Lỗi chi tiết:`, error.message);
    console.error(`[API Fetch Failed] -> VUI LÒNG KIỂM TRA LẠI: 1. Server Django có đang chạy không? 2. File .env.local có đúng không?`);
    return null; // Rất quan trọng: trả về null để page có thể xử lý
  }
}

// Lấy tất cả bài viết
export async function getPosts() {
  const data = await fetchAPI('posts/');
  // Luôn trả về một mảng, kể cả khi API lỗi, để tránh lỗi .map is not a function
  return data?.results || []; 
}

// Lấy bài viết theo slug
export async function getPostBySlug(slug) {
  const data = await fetchAPI(`posts/${slug}/`);
  return data;
}

// Lấy nội dung trang tĩnh theo slug
export async function getPageBySlug(slug) {
  const data = await fetchAPI(`pages/${slug}/`);
  return data;
}