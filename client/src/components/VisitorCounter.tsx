import { useEffect, useState } from "react";
import { Users } from "lucide-react";

export function VisitorCounter() {
    const [count, setCount] = useState<number | null>(null);

    // Specific key for SPC website to track unique page visits persistently
    const NAMESPACE = "spc-club-website-counter-v1-no-code";
    const KEY = "visits";

    useEffect(() => {
        // 1. Check if user already visited in this session
        const hasVisited = sessionStorage.getItem("visit_counted");

        if (!hasVisited) {
            // FIRST TIME VISIT: Hit the API to count + 1
            fetch(`https://api.countapi.xyz/hit/${NAMESPACE}/${KEY}`)
                .then((res) => res.json())
                .then((data) => {
                    setCount(data.value);
                    sessionStorage.setItem("visit_counted", "true");
                })
                .catch((err) => console.error("Counter error:", err));
        } else {
            // ALREADY VISITED: Just get the number (don't add +1)
            fetch(`https://api.countapi.xyz/get/${NAMESPACE}/${KEY}`)
                .then((res) => res.json())
                .then((data) => setCount(data.value))
                .catch((err) => console.error("Counter error:", err));
        }
    }, []);

    if (count === null) return null;

    return (
        <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground bg-secondary/50 px-3 py-1.5 rounded-full w-fit">
            <Users className="h-3 w-3" />
            <span>{count.toLocaleString()} Site Visits</span>
        </div>
    );
}
