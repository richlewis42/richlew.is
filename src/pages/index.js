import React from 'react'

const Page = () => (
  <>
    <h1>Index Page</h1>
    <p>This is the index page</p>
  </>
)

export default Page

export const frontmatter = {
  label: 'home',
  path: '/',
  precedence: 0
}
