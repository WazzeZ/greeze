"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

interface NewDiscussionDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function NewDiscussionDialog({
  open,
  onOpenChange,
}: NewDiscussionDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Create New Discussion</DialogTitle>
          <DialogDescription>
            Start a new discussion topic in the community
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="title">Title</Label>
            <Input id="title" placeholder="Enter discussion title" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="category">Category</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="discussions">General Discussion</SelectItem>
                <SelectItem value="questions">Questions</SelectItem>
                <SelectItem value="collaborations">Collaborations</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="content">Content</Label>
            <Textarea
              id="content"
              placeholder="Write your discussion content here..."
              className="min-h-[200px]"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="tags">Tags</Label>
            <Input id="tags" placeholder="Add tags (comma separated)" />
          </div>
        </div>
        <div className="flex justify-end gap-4">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button>Create Discussion</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}