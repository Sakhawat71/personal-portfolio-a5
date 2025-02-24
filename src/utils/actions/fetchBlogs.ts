"use server";

export const fetchBlogs = async () => {
    try {
        const res = await fetch(`${process.env.BACKEND_URL}/blogs`, {
            method: "GET",
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error("Failed to fetch blogs");
        }

        return await res.json();
    } catch (error) {
        console.error("Error fetching blogs:", error);
        return [];
    }
};

export const fetchBlogById = async (id: string) => {
    try {
        const res = await fetch(`${process.env.BACKEND_URL}/blogs/${id}`, {
            method: "GET",
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error("Failed to fetch blog");
        }

        return await res.json();
    } catch (error) {
        console.error("Error fetching blog:", error);
        return null;
    }
};


export const fetchCreateBlog = async (data: any) => {
  try {
    const res = await fetch(`${process.env.BACKEND_URL}/blogs/create-blog`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      cache: "no-store",
    });

    return await res.json();
  } catch (error) {
    console.error("Error creating blog:", error);
    return { success: false };
  }
};
