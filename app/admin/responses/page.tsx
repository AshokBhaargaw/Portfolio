"use client"

import { fetchResponses } from "@/redux/slices/responseSlice";
import { AppDispatch, RootState } from "@/redux/store";
import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Page() {
  const dispatch = useDispatch<AppDispatch>();
  const { responses, loading, error } = useSelector((state: RootState) => state.responses);
  const [showMessageOf, setShowMessageOf] = React.useState<string | null>(null);

  useEffect(() => {
    dispatch(fetchResponses());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="space-y-4">
        <h1 className="text-2xl font-bold mb-6">User Responses</h1>
        <div className="grid gap-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <ResponseSkeleton key={i} />
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500 p-5 text-center">
        Error loading responses: {error}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold mb-6">User Responses</h1>
      {responses.length === 0 ? (
        <div className="text-muted-foreground text-center p-10 border border-dashed rounded-2xl">
          No responses found yet.
        </div>
      ) : (
        <div className="grid gap-4">
          {responses.map((res) => (
            <div key={res._id} className="border border-muted-foreground/30 rounded-2xl p-5 space-y-3 hover:border-purple-500/50 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex">
                  <b className="text-muted-foreground mr-2">Name:</b>
                  <p>{res.name}</p>
                </div>
                {res.createdAt && (
                  <span className="text-xs text-muted-foreground">
                    {new Date(res.createdAt).toLocaleDateString()}
                  </span>
                )}
              </div>
              <div className="flex">
                <b className="text-muted-foreground mr-2">Email:</b>
                <p className="text-purple-400">{res.email}</p>
              </div>
              <div className="flex flex-col">
                <div className="flex justify-between items-center">
                  <b className="text-muted-foreground mb-1">Message:</b>
                  {showMessageOf === res._id ? (
                    <ChevronUp className="w-4 h-4 ml-2 cursor-pointer text-muted-foreground " onClick={() => setShowMessageOf(null)} />
                  ) : (
                    <ChevronDown className="w-4 h-4 ml-2 cursor-pointer text-muted-foreground" onClick={() => setShowMessageOf(res._id)} />
                  )
                  }
                </div>
                <p className={`bg-muted-foreground/5 p-3 rounded-lg whitespace-pre-wrap ${showMessageOf === res._id ? "line-clamp-none" : "line-clamp-3"}`} onClick={() => setShowMessageOf(res._id)}>{res.message}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}




function ResponseSkeleton() {
  return (
    <div className="border border-muted-foreground/30 rounded-2xl p-5 space-y-4 animate-pulse">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div className="space-y-2">
          <div className="h-4 w-32 bg-muted-foreground/20 rounded" />
          <div className="h-3 w-48 bg-muted-foreground/15 rounded" />
        </div>
        <div className="h-3 w-20 bg-muted-foreground/15 rounded" />
      </div>

      {/* Message */}
      <div className="space-y-2">
        <div className="h-3 w-24 bg-muted-foreground/15 rounded" />
        <div className="h-3 w-full bg-muted-foreground/10 rounded" />
        <div className="h-3 w-5/6 bg-muted-foreground/10 rounded" />
      </div>
    </div>
  );
}
