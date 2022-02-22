import './index.css'

const BlogItem = props => {
  const {BlogItems} = props
  const {title, description, publishedDate} = BlogItems

  return (
    <li className="list-items">
      <div className="heading-container">
        <h1 className="title">{title}</h1>
        <p className="time">{publishedDate}</p>
      </div>
      <p className="description">{description}</p>
    </li>
  )
}

export default BlogItem
