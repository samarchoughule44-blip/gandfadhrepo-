import { useState } from "react";
import { Pencil, Trash2, Plus } from "lucide-react";
import AdminLayout from "../../components/AdminLayout";
import EditDesign from "../admin/EditDesign"; 

// Dummy Data
const delivered = [
  {
    id: 1,
    title: "Modern Modular Kitchen",
    price: "₹1.5L - ₹3L",
    category: "kitchen",
    image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae"
  }
];

const upcoming = [
  {
    id: 2,
    title: "Minimal Bedroom Suite",
    price: "₹80K - ₹1.5L",
    category: "bedroom",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
  },
  {
    id: 3,
    title: "Classic Living Room",
    price: "₹3L - ₹5L",
    category: "living-room",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511"
  }
];

export default function DesignAdd() {
  const [activeTab, setActiveTab] = useState("delivered");
  const [editData, setEditData] = useState(null);

  const openEdit = (item) => setEditData(item);
  const closeEdit = () => setEditData(null);

  const getData = () => (activeTab === "delivered" ? delivered : upcoming);

  return (
    <AdminLayout>
      <div className="min-h-screen p-10 bg-[#f6f3ee]">

        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <h1 className="text-3xl font-bold text-gray-800">Manage Designs</h1>
          <button className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-medium">
            <Plus size={18} /> Add Design
          </button>
        </div>

        {/* Tabs */}
        <div className="flex justify-center space-x-16 mb-12">
          <button
            onClick={() => setActiveTab("delivered")}
            className={`pb-3 text-lg font-semibold ${
              activeTab === "delivered"
                ? "text-green-700 border-b-2 border-green-700"
                : "text-gray-500 hover:text-green-700"
            }`}
          >
            Delivered Projects
          </button>

          <button
            onClick={() => setActiveTab("upcoming")}
            className={`pb-3 text-lg font-semibold ${
              activeTab === "upcoming"
                ? "text-green-700 border-b-2 border-green-700"
                : "text-gray-500 hover:text-green-700"
            }`}
          >
            Upcoming Projects
          </button>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {getData().map((item) => (
            <ProjectCard key={item.id} data={item} openEdit={openEdit} />
          ))}
        </div>

        {/* Modal mount point */}
        {editData && (
          <EditDesign data={editData} onClose={closeEdit} />
        )}
      </div>
    </AdminLayout>
  );
}

/* ---------------- Project Card Component ---------------- */
function ProjectCard({ data, openEdit }) {
  return (
    <div className="bg-white p-3 rounded-xl shadow-sm border">
      <div className="relative group">
        <img
          src={data.image}
          className="rounded-lg h-44 w-full object-cover z-0"
          alt={data.title}
        />

        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-3 z-10 rounded-lg">
          <button
            onClick={() => openEdit(data)}
            className="bg-green-600 text-white py-2 px-3 rounded-lg flex items-center gap-1"
          >
            <Pencil size={16} /> Edit
          </button>
          
          <button className="bg-red-600 text-white py-2 px-3 rounded-lg flex items-center gap-1">
            <Trash2 size={16} /> Delete
          </button>
        </div>
      </div>

      <h3 className="text-lg font-semibold mt-3">{data.title}</h3>
      <p className="text-sm text-gray-500">
        {data.price} - {data.category}
      </p>
    </div>
  );
}
