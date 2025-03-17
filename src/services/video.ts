import { db } from "@/utils/db";
import { videosTable } from "@/utils/db/schema";
import type { VideoInsert } from "@/types";
import { eq } from "drizzle-orm";

class VideoService {

  async getVideos () {

    const videos = await db
      .select({
        id: videosTable.id,
        name: videosTable.name,
        date: videosTable.date,
      }).from(videosTable);

    return videos;

  }

  async getVideo (id: number) {

    const video = await db.select().from(videosTable).where(eq(videosTable.id, id));

    return video[0] || null;

  }

  async addVideo (data: VideoInsert) {

    const { name, url, userId } = data;

    const video = await db.insert(videosTable).values({ name, url, userId }).returning();

    return video[0] || null;

  }

  async deleteVideo (id: number) {

    return await db.delete(videosTable).where(eq(videosTable.id, id));

  }

}

const videoService = new VideoService ();

export default videoService;