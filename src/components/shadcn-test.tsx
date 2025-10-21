'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
// shadcn 테스트 파일 확인 이후 삭제 예정

export default function ShadcnTest() {
  return (
    <div className="min-h-screen p-8 space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">shadcn/ui 테스트</h1>
        <p className="text-muted-foreground">컴포넌트가 제대로 작동하는지 확인해보세요!</p>
      </div>

      {/* Button 테스트 */}
      <Card>
        <CardHeader>
          <CardTitle>Button 컴포넌트 테스트</CardTitle>
          <CardDescription>다양한 버튼 스타일을 확인해보세요</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-wrap gap-4">
            <Button>기본 버튼</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <Button size="sm">Small</Button>
            <Button size="default">Default</Button>
            <Button size="lg">Large</Button>
          </div>
        </CardContent>
      </Card>

      {/* Card 테스트 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>블로그 포스트 1</CardTitle>
            <CardDescription>첫 번째 포스트입니다</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              이것은 shadcn/ui Card 컴포넌트의 예시입니다. 
              블로그 포스트를 표시하는데 사용할 수 있습니다.
            </p>
            <div className="mt-4">
              <Button size="sm">읽기</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>블로그 포스트 2</CardTitle>
            <CardDescription>두 번째 포스트입니다</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Card 컴포넌트는 다양한 콘텐츠를 깔끔하게 표시할 수 있습니다.
              반응형 그리드 레이아웃도 잘 작동합니다.
            </p>
            <div className="mt-4">
              <Button size="sm" variant="outline">편집</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>블로그 포스트 3</CardTitle>
            <CardDescription>세 번째 포스트입니다</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              shadcn/ui는 Tailwind CSS와 완벽하게 통합되어 
              일관된 디자인 시스템을 제공합니다.
            </p>
            <div className="mt-4">
              <Button size="sm" variant="secondary">삭제</Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* 상태 확인 */}
      <Card>
        <CardHeader>
          <CardTitle>설치 상태 확인</CardTitle>
          <CardDescription>shadcn/ui 설치가 완료되었습니다!</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm">Button 컴포넌트 ✅</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm">Card 컴포넌트 ✅</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm">Tailwind CSS 통합 ✅</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm">TypeScript 지원 ✅</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
