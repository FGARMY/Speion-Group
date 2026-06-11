import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content');

export interface PostMetadata {
  title: string;
  date: string;
  author: string;
  excerpt: string;
  slug: string;
  category: string;
  coverImage?: string;
}

export function getPostBySlug(slug: string, folder: string) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = path.join(contentDirectory, folder, `${realSlug}.md`);
  
  try {
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    
    return {
      slug: realSlug,
      meta: data as PostMetadata,
      content,
    };
  } catch (e) {
    return null;
  }
}

export function getAllPosts(folder: string) {
  const dirPath = path.join(contentDirectory, folder);
  if (!fs.existsSync(dirPath)) return [];
  
  const files = fs.readdirSync(dirPath);
  
  const posts = files
    .filter((filename) => filename.endsWith('.md'))
    .map((filename) => {
      const slug = filename.replace(/\.md$/, '');
      const post = getPostBySlug(slug, folder);
      return post;
    })
    .filter((post) => post !== null);
    
  return posts.sort((post1, post2) => (post1!.meta.date > post2!.meta.date ? -1 : 1));
}
