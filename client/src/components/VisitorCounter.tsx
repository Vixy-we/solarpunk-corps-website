import { useEffect, useState } from "react";
import { Users } from "lucide-react";

export function VisitorCounter() {
    const [count, setCount] = useState<number | null>(null);

    // Specific key for SPC website to track unique page visits persistently
    const NAMESPACE = "spc-club-website-counter-v1-no-code";
    const KEY = "visits";

    useEffect(() => {
        let hasVisited = false;
        try {
            if (typeof window !== "undefined" && typeof sessionStorage !== "undefined") {
                hasVisited = sessionStorage.getItem("visit_counted") === "true";
            }
        } catch {
            // Ignore storage read error
        }

        const endpoint = !hasVisited
            ? `https://api.countapi.xyz/hit/${NAMESPACE}/${KEY}`
            : `https://api.countapi.xyz/get/${NAMESPACE}/${KEY}`;

        fetch(endpoint)
            .then((res) => {
                if (!res.ok) return null;
                return res.json();
            })
            .then((data) => {
                if (data && typeof data.value === "number") {
                    setCount(data.value);
                    if (!hasVisited) {
                        try {
                            if (typeof window !== "undefined" && typeof sessionStorage !== "undefined") {
                                sessionStorage.setItem("visit_counted", "true");
                            }
                        } catch {
                            // Ignore storage write error
                        }
                    }
                }
            })
            .catch(() => {
                // Silently ignore counter service network issues without throwing
            });
    }, []);

    if (count === null) return null;

    return (
        <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground bg-secondary/50 px-3 py-1.5 rounded-full w-fit">
            <Users className="h-3 w-3" />
            <span>{count.toLocaleString()} Site Visits</span>
        </div>
    );
}
