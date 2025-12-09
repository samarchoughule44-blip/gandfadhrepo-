import { useState } from "react";
import { X, Upload } from "lucide-react";

export default function EditDesign({ data, onClose }) {
  const [formData, setFormData] = useState({
    title: data.title,
    description: data.description || "",
    roomType: data.category || "Kitchen",
    style: data.style || "Modern",
    budget: data.budget || "Mid Range",
    priceRange: data.price,
    deliveryTime: data.deliveryTime || "3-4 weeks",
    image: data.image,
  });

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData({ ...formData, image: reader.result });
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-lg max-h-[90vh] overflow-hidden ">
        {/* HEADER */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Edit Design</h2>
          <X size={22} className="cursor-pointer" onClick={onClose} />
        </div>

        {/* Title */}
        <label className="text-sm font-medium">Title</label>
        <input
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className="w-full border rounded-md p-2 mb-4"
        />

        {/* Description */}
        <label className="text-sm font-medium">Description</label>
        <textarea
          value={formData.description}
          rows={3}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
          className="w-full border rounded-md p-2 mb-4"
        />

        {/* Select Section */}
        <div className="grid grid-cols-3 gap-3">
          {/* Room Type */}
          <div>
            <label className="text-sm font-medium">Room Type</label>
            <select
              value={formData.roomType}
              onChange={(e) =>
                setFormData({ ...formData, roomType: e.target.value })
              }
              className="w-full border rounded-md p-2"
            >
              <option>Kitchen</option>
              <option>Bedroom</option>
              <option>Living Room</option>
              <option>Full Home</option>
            </select>
          </div>

          {/* Style */}
          <div>
            <label className="text-sm font-medium">Style</label>
            <select
              value={formData.style}
              onChange={(e) =>
                setFormData({ ...formData, style: e.target.value })
              }
              className="w-full border rounded-md p-2"
            >
              <option>Modern</option>
              <option>Minimal</option>
              <option>Classic</option>
              <option>Scandinavian</option>
            </select>
          </div>

          {/* Budget */}
          <div>
            <label className="text-sm font-medium">Budget</label>
            <select
              value={formData.budget}
              onChange={(e) =>
                setFormData({ ...formData, budget: e.target.value })
              }
              className="w-full border rounded-md p-2"
            >
              <option>Low Range</option>
              <option>Mid Range</option>
              <option>Premium</option>
            </select>
          </div>
        </div>

        {/* Price + Delivery */}
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label className="text-sm font-medium">Price Range</label>
            <input
              value={formData.priceRange}
              onChange={(e) =>
                setFormData({ ...formData, priceRange: e.target.value })
              }
              className="w-full border rounded-md p-2"
            />
          </div>
          <div>
            <label className="text-sm font-medium">Delivery Time</label>
            <input
              value={formData.deliveryTime}
              onChange={(e) =>
                setFormData({ ...formData, deliveryTime: e.target.value })
              }
              className="w-full border rounded-md p-2"
            />
          </div>
        </div>

        {/* Image Upload */}
        {formData.image ? (
          <div className="relative mb-4 w-full h-44 rounded-md overflow-hidden border">
            <img
              src={formData.image}
              className="w-full h-full object-cover"
              alt="uploaded"
            />
            <button
              onClick={() => setFormData({ ...formData, image: "" })}
              className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1"
            >
              <X size={14} />
            </button>
          </div>
        ) : (
          <label className="border border-dashed border-gray-300 rounded-md w-full h-44 flex flex-col items-center justify-center gap-1 cursor-pointer hover:bg-gray-50">
            <Upload size={28} className="text-gray-400" />
            <span className="text-sm text-gray-500">Click to upload</span>
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageUpload}
            />
          </label>
        )}

        {/* Footer */}
        <div className="flex justify-end gap-3 mt-4">
          <button className="px-4 py-2 border rounded-lg" onClick={onClose}>
            Cancel
          </button>
          <button className="px-4 py-2 bg-green-600 text-white rounded-lg">
            Update Design
          </button>
        </div>
      </div>
    </div>
  );
}
