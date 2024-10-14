import { useEffect, useState } from "react";
import TagDetails from "./TagDetails";
import TopNav from "../../components/TopNav.jsx";

function TagsPage() {
  const [tags, setTags] = useState([]);
  const [selectedTag, setSelectedTag] = useState(null); // Track selected tag
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const colors = [
    "bg-red-500",
    "bg-blue-500",
    "bg-green-500",
    "bg-yellow-500",
    "bg-purple-500",
    "bg-pink-500",
    "bg-indigo-500",
    "bg-teal-500",
  ];

  useEffect(() => {
    const fetchTags = async () => {
      try {
        const response = await fetch("https://dummyjson.com/recipes/tags");
        if (!response.ok) throw new Error("Failed to fetch tags");
        const data = await response.json();
        setTags(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchTags();
  }, []);

  if (loading) {
    return (
      <div>
        <TopNav />
        <div className="p-4">
          <div className="flex-col flex justify-center items-center h-32">
            <div>Loading</div>
            <div className="loading loading-dots bg-primary loading-lg border-t-4"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  // Show TagDetails if a tag is selected
  if (selectedTag) {
    return <TagDetails tag={selectedTag} onBack={() => setSelectedTag(null)} />;
  }

  // Render the list of tags
  return (
    <div>
      <TopNav />
      <div className="px-3">
        <div className="my-3">
          <div className="text-xl md:text-2xl font-bold">
            Ready to become a kitchen wizard?
          </div>
          <div className="text-sm md:text-base text-gray-500">
            Pick a food category and let's create magic
          </div>
        </div>

        <div className="flex flex-wrap gap-2 justify-center md:px-48">
          {tags.map((tag, index) => (
            <div
              key={index}
              className={`badge badge-lg cursor-pointer hover:scale-110 text-white ${
                colors[index % colors.length]
              }`}
              onClick={() => setSelectedTag(tag)}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TagsPage;
