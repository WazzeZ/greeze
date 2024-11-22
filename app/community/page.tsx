"use client";

import { CommunityHeader } from "@/components/community/community-header";
import { DiscussionList } from "@/components/community/discussion-list";
import { OnlineMembers } from "@/components/community/online-members";
import { PopularTopics } from "@/components/community/popular-topics";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

export default function CommunityPage() {
  const [currentTab, setCurrentTab] = useState("discussions");

  return (
    <main className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CommunityHeader />

        <div className="grid grid-cols-1 lg:grid-cols-[1fr,300px] gap-8 mt-8">
          <div className="space-y-8">
            <Tabs value={currentTab} onValueChange={setCurrentTab}>
              <TabsList className="w-full justify-start">
                <TabsTrigger value="discussions">Discussions</TabsTrigger>
                <TabsTrigger value="questions">Questions</TabsTrigger>
                <TabsTrigger value="collaborations">Collaborations</TabsTrigger>
              </TabsList>
              <TabsContent value="discussions">
                <DiscussionList category="discussions" />
              </TabsContent>
              <TabsContent value="questions">
                <DiscussionList category="questions" />
              </TabsContent>
              <TabsContent value="collaborations">
                <DiscussionList category="collaborations" />
              </TabsContent>
            </Tabs>
          </div>

          <div className="space-y-8">
            <OnlineMembers />
            <PopularTopics />
          </div>
        </div>
      </div>
    </main>
  );
}