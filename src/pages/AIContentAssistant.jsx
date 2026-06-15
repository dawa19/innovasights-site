import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Sparkles, FileText, BookOpen, FileSearch, Loader2 } from 'lucide-react';
import { base44 } from '@/api/base44Client';
import { toast } from 'sonner';

export default function AIContentAssistant() {
  const [blogTopic, setBlogTopic] = useState('');
  const [blogOutline, setBlogOutline] = useState('');
  const [blogLoading, setBlogLoading] = useState(false);

  const [serviceKeywords, setServiceKeywords] = useState('');
  const [serviceDescription, setServiceDescription] = useState('');
  const [serviceLoading, setServiceLoading] = useState(false);

  const [whitepaperContent, setWhitepaperContent] = useState('');
  const [summary, setSummary] = useState('');
  const [summaryLoading, setSummaryLoading] = useState(false);

  const generateBlogOutline = async () => {
    if (!blogTopic.trim()) {
      toast.error('Please enter a blog topic');
      return;
    }

    setBlogLoading(true);
    setBlogOutline('');

    try {
      const result = await base44.integrations.Core.InvokeLLM({
        prompt: `Generate a comprehensive blog post outline for an IT infrastructure company about: "${blogTopic}". 

Include:
- An engaging title
- Introduction points
- 4-5 main sections with subsections
- Key takeaways
- Conclusion points

Make it professional and suitable for enterprise IT decision-makers.`,
        add_context_from_internet: false
      });

      setBlogOutline(result);
      toast.success('Blog outline generated!');
    } catch (error) {
      toast.error('Failed to generate outline');
      console.error(error);
    } finally {
      setBlogLoading(false);
    }
  };

  const generateServiceDescription = async () => {
    if (!serviceKeywords.trim()) {
      toast.error('Please enter service keywords');
      return;
    }

    setServiceLoading(true);
    setServiceDescription('');

    try {
      const result = await base44.integrations.Core.InvokeLLM({
        prompt: `Create a professional service description for an IT infrastructure company based on these keywords: "${serviceKeywords}".

The description should:
- Be 2-3 paragraphs long
- Highlight key benefits and features
- Use professional, technical language
- Target enterprise clients
- Include specific technologies and methodologies where relevant

Make it compelling and clear.`,
        add_context_from_internet: false
      });

      setServiceDescription(result);
      toast.success('Service description generated!');
    } catch (error) {
      toast.error('Failed to generate description');
      console.error(error);
    } finally {
      setServiceLoading(false);
    }
  };

  const summarizeContent = async () => {
    if (!whitepaperContent.trim()) {
      toast.error('Please enter content to summarize');
      return;
    }

    setSummaryLoading(true);
    setSummary('');

    try {
      const result = await base44.integrations.Core.InvokeLLM({
        prompt: `Summarize the following technical content into a concise executive summary. Focus on:
- Key findings and insights
- Main technical points
- Business implications
- Actionable recommendations

Content to summarize:
${whitepaperContent}

Provide a clear, professional summary suitable for IT decision-makers.`,
        add_context_from_internet: false
      });

      setSummary(result);
      toast.success('Summary generated!');
    } catch (error) {
      toast.error('Failed to generate summary');
      console.error(error);
    } finally {
      setSummaryLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <Badge className="mb-4 bg-yellow-500 text-slate-900 hover:bg-yellow-400">
              <Sparkles className="w-4 h-4 mr-2 inline" />
              AI-Powered
            </Badge>
            <h1 className="text-5xl font-bold mb-6">Content Assistant</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              AI-powered tools to help you create professional IT infrastructure content instantly
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <Tabs defaultValue="blog" className="space-y-8">
            <TabsList className="grid w-full grid-cols-3 h-auto p-2">
              <TabsTrigger value="blog" className="flex items-center gap-2 py-3">
                <BookOpen className="w-4 h-4" />
                <span className="hidden sm:inline">Blog Outlines</span>
              </TabsTrigger>
              <TabsTrigger value="service" className="flex items-center gap-2 py-3">
                <FileText className="w-4 h-4" />
                <span className="hidden sm:inline">Service Descriptions</span>
              </TabsTrigger>
              <TabsTrigger value="summary" className="flex items-center gap-2 py-3">
                <FileSearch className="w-4 h-4" />
                <span className="hidden sm:inline">Summarize</span>
              </TabsTrigger>
            </TabsList>

            {/* Blog Outline Generator */}
            <TabsContent value="blog">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="w-6 h-6 text-blue-900" />
                    Generate Blog Post Outline
                  </CardTitle>
                  <CardDescription>
                    Enter a topic and get a comprehensive blog post outline tailored for IT infrastructure
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Blog Topic
                    </label>
                    <Input
                      placeholder="e.g., Best Practices for Network Security in 2026"
                      value={blogTopic}
                      onChange={(e) => setBlogTopic(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && generateBlogOutline()}
                    />
                  </div>
                  <Button
                    onClick={generateBlogOutline}
                    disabled={blogLoading}
                    className="w-full bg-blue-900 hover:bg-blue-800"
                    size="lg"
                  >
                    {blogLoading ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Generating...
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-5 h-5 mr-2" />
                        Generate Outline
                      </>
                    )}
                  </Button>

                  {blogOutline && (
                    <div className="mt-6">
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Generated Outline
                      </label>
                      <Textarea
                        value={blogOutline}
                        onChange={(e) => setBlogOutline(e.target.value)}
                        className="min-h-96 font-mono text-sm"
                      />
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            {/* Service Description Generator */}
            <TabsContent value="service">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="w-6 h-6 text-blue-900" />
                    Draft Service Description
                  </CardTitle>
                  <CardDescription>
                    Provide keywords and get a professional service description for your IT offerings
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Service Keywords
                    </label>
                    <Input
                      placeholder="e.g., cloud migration, AWS, Azure, hybrid infrastructure"
                      value={serviceKeywords}
                      onChange={(e) => setServiceKeywords(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && generateServiceDescription()}
                    />
                  </div>
                  <Button
                    onClick={generateServiceDescription}
                    disabled={serviceLoading}
                    className="w-full bg-blue-900 hover:bg-blue-800"
                    size="lg"
                  >
                    {serviceLoading ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Generating...
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-5 h-5 mr-2" />
                        Generate Description
                      </>
                    )}
                  </Button>

                  {serviceDescription && (
                    <div className="mt-6">
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Generated Description
                      </label>
                      <Textarea
                        value={serviceDescription}
                        onChange={(e) => setServiceDescription(e.target.value)}
                        className="min-h-64"
                      />
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            {/* Whitepaper Summarizer */}
            <TabsContent value="summary">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileSearch className="w-6 h-6 text-blue-900" />
                    Summarize Technical Content
                  </CardTitle>
                  <CardDescription>
                    Paste whitepaper or case study content to get an executive summary
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Content to Summarize
                    </label>
                    <Textarea
                      placeholder="Paste your technical whitepaper, case study, or detailed content here..."
                      value={whitepaperContent}
                      onChange={(e) => setWhitepaperContent(e.target.value)}
                      className="min-h-64"
                    />
                  </div>
                  <Button
                    onClick={summarizeContent}
                    disabled={summaryLoading}
                    className="w-full bg-blue-900 hover:bg-blue-800"
                    size="lg"
                  >
                    {summaryLoading ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Summarizing...
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-5 h-5 mr-2" />
                        Generate Summary
                      </>
                    )}
                  </Button>

                  {summary && (
                    <div className="mt-6">
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Executive Summary
                      </label>
                      <Textarea
                        value={summary}
                        onChange={(e) => setSummary(e.target.value)}
                        className="min-h-64"
                      />
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}