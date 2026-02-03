import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface EventCardProps {
  name: string;
  icon: LucideIcon;
  image: string;
  category: string;
  imageClassName?: string;
}

export const EventCard = ({
  name,
  icon: Icon,
  image,
  category,
  imageClassName,
}: EventCardProps) => {
  // Check if this is a singing event to apply red theme and close registration
  const isSingingEvent = name === "Solo Singing" || name === "Group Singing";

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl",
        isSingingEvent 
          ? "bg-red-100 border-red-200 hover:border-red-400" 
          : "bg-pink-100 border-pink-200 hover:border-pink-400"
      )}
    >
      {/* Image */}
      <div className={cn("relative h-48 overflow-hidden", isSingingEvent ? "bg-red-50" : "bg-pink-50")}>
        <img
          src={image}
          alt={name}
          className={cn(
            "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110",
            imageClassName
          )}
        />
        <div className={cn(
          "absolute inset-0 bg-gradient-to-t via-transparent to-transparent",
          isSingingEvent ? "from-red-100" : "from-pink-100"
        )} />

        {/* Category Badge */}
        <div className={cn(
          "absolute top-4 right-4 px-3 py-1 rounded-full text-white text-xs font-medium",
          isSingingEvent ? "bg-red-500" : "bg-pink-500"
        )}>
          {category}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className={cn(
            "w-10 h-10 rounded-lg flex items-center justify-center",
            isSingingEvent ? "bg-red-200" : "bg-pink-200"
          )}>
            <Icon className={cn("w-5 h-5", isSingingEvent ? "text-red-700" : "text-pink-700")} />
          </div>
          <h3 
            className={cn(
              "font-serif text-xl font-semibold", 
              isSingingEvent ? "text-red-900" : "text-pink-900"
            )} 
            dangerouslySetInnerHTML={{ __html: name }} 
          />
        </div>

        <Button
          className={cn(
            "w-full transition-all duration-300",
            isSingingEvent 
              ? "bg-red-200 hover:bg-red-200 text-red-700 cursor-not-allowed border-red-300" 
              : "bg-pink-200 hover:bg-pink-300 text-pink-700 hover:text-pink-900 border-pink-300 hover:border-pink-400"
          )}
          variant="outline"
          disabled={isSingingEvent}
          onClick={() => {
            if (name === "Dual Dance") {
              window.open("https://forms.gle/JHxp49Ee1SAKXN1J8", "_blank");
            } else if (name === "Group Dance") {
              window.open("https://forms.gle/L6kMHWa4qXtV4njS9", "_blank");
            } else if (name === "Mehandi") {
              window.open("https://forms.gle/AiigzPBB2YZRPDpk8", "_blank");
            } else if (name === "Rangoli") {
              window.open("https://forms.gle/TmL3Tcg6s3B78A1G9", "_blank");
            } else if (name === "Photography") {
              window.open("https://forms.gle/yNHdqXoXRTKxUVLt8", "_blank");
            } else if (name === "Treasure Hunt") {
              window.open("https://forms.gle/nQpuo5UNURNCxxjRA", "_blank");
            } else if (name === "Solo Dance") {
              window.open("https://forms.gle/NyzDVq5qHeyMG4Ky6", "_blank");
            } else if (name === "Instrumental &<br/>Unique Talent") {
              window.open("https://forms.gle/7QL13FnR7m9zX1x5A", "_blank");
            } else if (name === "Carving &<br/>Cook without Fire") {
              window.open("https://forms.gle/3y6srgssPmH4Z7s8A", "_blank");
            } else if (name === "Fashion Parade") {
              window.open("https://docs.google.com/forms/d/e/1FAIpQLSezx_DkkgppnwYvxAvT2ybhKkaNo5EvC_C45wLfawqhOswGxA/viewform?usp=header", "_blank");
            } else if (name === "Debate") {
              window.open("https://forms.gle/7AciYABL8kxEdekQA", "_blank");
            } else if (name === "Craft Work") {
              window.open("https://docs.google.com/forms/d/e/1FAIpQLSchiIofG34qgTPQmLfqSlLo51YdGYn_i9MgNXndjTrEUuUYQQ/viewform?usp=publish-editor", "_blank");
            }
          }}
        >
          {isSingingEvent ? "Closed" : "Register"}
        </Button>
      </div>
    </div>
  );
};