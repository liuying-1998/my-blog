import request from "./request";


/**
 * 分页获取博客
 * @param {*} page 当前页码
 * @param {*} limit 页容量
 * @param {*} categoryid 所属分类，-1表示全部
 */
export async function getBlogs(page=1,limit=10,categoryid=-1) {
  return await request.get("/api/blog", {
    params: {
      page,
      limit,
      categoryid,
    }
  });
}

/**
 * 获取所有博客分类
 */
export async function getBlogTypes() {
  return await request.get("/api/blogtype");
}

/**
 * 获取单个博客
 */
export async function getBlog(id) {
  return await request.get(`/api/blog/${id}`);
}

/**
 * 提交评论
 */
export async function comment(commentInfo) {
  return await request.post("/api/comment", commentInfo);
} 

/**
 * 提交评论
 */
export async function getComments(page=1,limit=10,blogid=-1) {
  return await request.get("/api/comment", {
    params: {
      page,
      limit,
      blogid,
    }
  });
}