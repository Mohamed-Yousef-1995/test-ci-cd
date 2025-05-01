import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

export interface ProgressIndicatorProps {
  value?: number;
  status?: 'in-progress' | 'completed' | 'action-required' | 'rejected' | 'error';
  showLabel?: boolean;
}

const ProgressIndicator = ({
  value = 0,
  status = 'in-progress',
  showLabel = true
}: ProgressIndicatorProps) => {
  const getStatusColor = () => {
    switch (status) {
      case 'completed':
        return 'bg-green-500';
      case 'action-required':
        return 'bg-orange-500';
      case 'rejected':
        return 'bg-gray-500';
      case 'error':
        return 'bg-red-500';
      default:
        return 'bg-green-500';
    }
  };

  const getStatusLabel = () => {
    switch (status) {
      case 'completed':
        return 'Completed';
      case 'action-required':
        return 'Action Required';
      case 'rejected':
        return 'Rejected';
      case 'error':
        return 'Error';
      default:
        return 'In Progress';
    }
  };

  return (
    <div className="w-full max-w-md space-y-2">
      <div className={cn(
        "relative h-2 w-full overflow-hidden rounded-full",
        status === 'completed' && "bg-green-200",
        status === 'action-required' && "bg-orange-200",
        status === 'rejected' && "bg-gray-200",
        status === 'error' && "bg-red-200",
        status === 'in-progress' && "bg-green-200"
      )}>
        <Progress
          value={value}
          className={cn(
            "h-full w-full transition-all",
            getStatusColor()
          )}
        />
      </div>
      {showLabel && (
        <Badge
          variant="outline"
          className={cn(
            "text-xs font-medium",
            status === 'completed' && "border-green-500 text-green-500",
            status === 'action-required' && "border-orange-500 text-orange-500",
            status === 'rejected' && "border-gray-500 text-gray-500",
            status === 'error' && "border-red-500 text-red-500",
            status === 'in-progress' && "border-green-500 text-green-500"
          )}
        >
          {getStatusLabel()}
        </Badge>
      )}
    </div>
  );
};

export default ProgressIndicator;