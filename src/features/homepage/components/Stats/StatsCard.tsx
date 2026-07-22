import { Surface } from "@/components/ui";

interface StatsCardProps {
  value: string;
  label: string;
}

export function StatsCard({ value, label }: StatsCardProps) {
  return (
    <Surface className="p-6 text-center">
      <h3 className="text-3xl font-bold">{value}</h3>

      <p className="mt-2 text-sm text-gray-600">{label}</p>
    </Surface>
  );
}
