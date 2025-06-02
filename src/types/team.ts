export interface Position {
    title: string
    company: string
    endDate?: string
  }
  
  export interface Education {
    degree: string
    institution: string
    field?: string
  }
  
  export interface TeamMember {
    id: string
    name: string
    position: string
    category: "board" | "shariah" | "executive"
    biography: string
    education?: Education[]
    currentPositions?: {
      chairman?: Position[]
      viceChairman?: Position[]
      ceo?: Position[]
      boardMember?: Position[]
      member?: Position[]
    }
    experience?: string[]
    imageUrl?: string
  }
  
  export interface BoardMember extends TeamMember {
    category: "board"
    boardRole: "chairman" | "vice-chairman" | "member" | "رئيس" |"نائب رئيس مجلس الإدارة " | "عضو"
  }
  
  export interface ShariahMember extends TeamMember {
    category: "shariah"
    specialization?: string[]
  }
  
  export interface ExecutiveMember extends TeamMember {
    category: "executive"
    department: string
    isFoundingMember?: boolean
    yearsOfExperience?: number
  }
  
  export type TeamMemberUnion = BoardMember | ShariahMember | ExecutiveMember
  
  export interface TeamData {
    boardMembers: BoardMember[]
    shariahMembers: ShariahMember[]
    executiveMembers: ExecutiveMember[]
  }
  