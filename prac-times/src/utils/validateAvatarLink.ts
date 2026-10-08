export default function validateAvatarLink(link: string) {
  if (link.trim().length === 0) {
    return "/src/data/userData/img/default-avatar.jpg";
  }

  return link;
}
