import { useContext } from "react"
import { LangContext } from "../../context/langContext"

const Blog = () => {
const {lang} = useContext(LangContext)
return(
<section id="blog" className="border-t py-16">
<div className="max-w-6xl mx-auto px-6">
<h3 className="text-2xl font-semibold">Blog</h3>
<p className="mt-2 text-slate-600">I write about fullstack development, performance, and best practices.</p>
<ul className="mt-6 space-y-6">
{[1,2,3].map(id => (
<li key={id} className="border-b pb-4">
<h4 className="text-lg font-medium">Post Title {id}</h4>
<p className="text-slate-600">Brief excerpt of the blog post content to invite reading.</p>
<a href="#" className="text-sm underline">{lang === 'us'?'Read more': "Leia mais"}</a>
</li>
))}
</ul>
</div>
</section>
)

}
export default Blog