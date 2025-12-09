import { X } from "lucide-react";

export default function EditDesign({ data, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      
      {/* MODAL CARD */}
      <div className="bg-white rounded-xl p-8 w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-xl">

        {/* Header */}
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-xl font-semibold">Edit Design</h2>
          <button onClick={onClose}>
            <X size={22} className="text-gray-700" />
          </button>
        </div>

        {/* Inputs */}
        <label className="text-sm font-medium">Title</label>
        <input
          defaultValue={data.title}
          className="w-full border p-2 rounded-md mb-4"
        />

        <label className="text-sm font-medium">Price Range</label>
        <input
          defaultValue={data.price}
          className="w-full border p-2 rounded-md mb-4"
        />

        <label className="text-sm font-medium">Image Preview</label>
        <img
          src={data.image}
          className="h-32 w-full rounded-lg mb-4 object-cover border"
        />

        {/* Footer */}
        <div className="flex justify-center mt-6">
          <button className="px-4 py-2 border rounded-lg" onClick={onClose}>
            Cancel
          </button>
          <button className="px-4 py-2 bg-green-600 text-black rounded-lg">
            Update Design
          </button>
        </div>

      </div>
    </div>
  );
}
